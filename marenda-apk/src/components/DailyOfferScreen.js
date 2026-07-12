import React, { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, Switch, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Section } from "./Section";
import { Field, PrimaryButton, SecondaryButton, SegmentedControl } from "./FormControls";
import { addGeneratedOffer, createId, findOfferBySignature, saveDish } from "../db/database";
import { createPdfFileName, formatOfferDateTime, getLocalDateTime } from "../helpers/datetime";
import { formatPriceDisplay, normalizePriceOptions, parsePrice } from "../helpers/format";
import { createOfferSignature, getDishSignatureToken, normalizeToken } from "../helpers/signature";
import { buildOfferPdfHtml } from "../pdf/buildOfferPdf";
import { persistPdfWithFileName } from "../pdf/pdfFiles";
import { colors, radius, spacing } from "../styles/theme";

const customValue = "__custom__";
const newPriceValue = "__new_price__";

function emptyCustomDish() {
  return {
    nameHr: "",
    nameEn: "",
    descriptionHr: "",
    descriptionEn: "",
    price: ""
  };
}

function emptySlot() {
  return {
    mode: "existing",
    search: "",
    dishId: "",
    priceMode: "existing",
    priceDisplay: "",
    newPrice: "",
    custom: emptyCustomDish(),
    saveToLibrary: false
  };
}

function getDishPriceOptions(dish) {
  if (!dish) {
    return [];
  }

  return normalizePriceOptions(dish.priceOptions, dish.price, dish.priceDisplay);
}

function getSelectedPriceOption(slot, dish) {
  if (!dish) {
    return null;
  }

  if (slot.priceMode === "new") {
    const price = parsePrice(slot.newPrice);
    return price > 0 ? { price, priceDisplay: formatPriceDisplay(price) } : null;
  }

  const priceOptions = getDishPriceOptions(dish);
  return (
    priceOptions.find((option) => option.priceDisplay === slot.priceDisplay) ||
    priceOptions[0] ||
    null
  );
}

function customDishFromSlot(slot) {
  const price = parsePrice(slot.custom.price);
  const priceDisplay = formatPriceDisplay(price);

  return {
    nameHr: slot.custom.nameHr.trim(),
    nameEn: slot.custom.nameEn.trim(),
    descriptionHr: slot.custom.descriptionHr.trim(),
    descriptionEn: slot.custom.descriptionEn.trim(),
    price,
    priceDisplay,
    priceOptions: [{ price, priceDisplay }],
    allergens: []
  };
}

function isCompleteDish(dish) {
  return Boolean(
    dish &&
      dish.nameHr &&
      dish.nameEn &&
      dish.descriptionHr &&
      dish.descriptionEn &&
      Number(dish.price) > 0
  );
}

function selectedDishFromSlot(slot, dishes) {
  if (slot.mode === "custom") {
    const customDish = customDishFromSlot(slot);
    return isCompleteDish(customDish) ? customDish : null;
  }

  const dish = dishes.find((item) => item.id === slot.dishId);
  const priceOption = getSelectedPriceOption(slot, dish);

  if (!dish || !priceOption) {
    return null;
  }

  return {
    ...dish,
    price: priceOption.price,
    priceDisplay: priceOption.priceDisplay
  };
}

function displayName(item, language) {
  if (!item) {
    return "";
  }

  return language === "en" ? item.nameEn || item.nameHr : item.nameHr || item.nameEn;
}

function filterDishes(dishes, search) {
  const query = normalizeToken(search);
  if (!query) {
    return dishes;
  }

  return dishes.filter((dish) =>
    normalizeToken(
      `${dish.nameHr} ${dish.nameEn} ${dish.descriptionHr || ""} ${dish.descriptionEn || ""}`
    ).includes(query)
  );
}

export function DailyOfferScreen({ dishes, onDataChanged }) {
  const [slots, setSlots] = useState([emptySlot(), emptySlot(), emptySlot()]);
  const [language, setLanguage] = useState("hr");
  const [duplicateMatch, setDuplicateMatch] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMarking, setIsMarking] = useState(false);

  const selectedItems = useMemo(
    () => slots.map((slot) => selectedDishFromSlot(slot, dishes)).filter(Boolean),
    [slots, dishes]
  );

  const signature = useMemo(() => {
    if (selectedItems.length !== 3) {
      return "";
    }

    return createOfferSignature(selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    let cancelled = false;

    async function checkDuplicate() {
      if (!signature) {
        setDuplicateMatch(null);
        return;
      }

      const match = await findOfferBySignature(signature);
      if (!cancelled) {
        setDuplicateMatch(match);
      }
    }

    checkDuplicate();
    return () => {
      cancelled = true;
    };
  }, [signature]);

  function updateSlot(index, patch) {
    setSlots((current) =>
      current.map((slot, slotIndex) => (slotIndex === index ? { ...slot, ...patch } : slot))
    );
  }

  function updateCustom(index, field, value) {
    setSlots((current) =>
      current.map((slot, slotIndex) =>
        slotIndex === index
          ? { ...slot, custom: { ...slot.custom, [field]: value } }
          : slot
      )
    );
  }

  function validateSelection() {
    if (selectedItems.length !== 3) {
      Alert.alert("Nedostaje jelo", "Odaberite ili upišite sva tri jela i cijene prije izrade PDF-a.");
      return null;
    }

    const tokens = selectedItems.map(getDishSignatureToken);
    if (new Set(tokens).size !== 3) {
      Alert.alert("Ponovljeno jelo", "Odaberite tri različita jela za današnju ponudu.");
      return null;
    }

    return {
      items: selectedItems,
      signature: createOfferSignature(selectedItems)
    };
  }

  async function saveRequestedCustomDishes() {
    const customSlots = slots.filter((slot) => slot.mode === "custom" && slot.saveToLibrary);

    for (const slot of customSlots) {
      const customDish = customDishFromSlot(slot);
      if (isCompleteDish(customDish)) {
        await saveDish(customDish);
      }
    }
  }

  async function saveRequestedNewPrices() {
    const existingSlots = slots.filter(
      (slot) => slot.mode === "existing" && slot.dishId && slot.priceMode === "new"
    );

    for (const slot of existingSlots) {
      const dish = dishes.find((item) => item.id === slot.dishId);
      const priceOption = getSelectedPriceOption(slot, dish);

      if (dish && priceOption) {
        await saveDish({
          ...dish,
          priceOptions: normalizePriceOptions(
            [...getDishPriceOptions(dish), priceOption],
            dish.price,
            dish.priceDisplay
          )
        });
      }
    }
  }

  async function generateOffer(items, offerSignature) {
    setIsGenerating(true);

    try {
      await saveRequestedCustomDishes();
      await saveRequestedNewPrices();

      const localDateTime = getLocalDateTime();
      const pdfTitle =
        language === "hr" ? "Bistro Putnik - Marenda" : "Bistro Putnik - Daily Lunch";
      const fileName = createPdfFileName(language, localDateTime);
      const html = buildOfferPdfHtml({ items, language });
      const result = await Print.printToFileAsync({
        html,
        width: 595,
        height: 842
      });

      let pdfFileUri = result.uri;
      try {
        pdfFileUri = await persistPdfWithFileName(result.uri, fileName);
      } catch {
        pdfFileUri = result.uri;
      }

      await addGeneratedOffer({
        id: createId("offer"),
        items,
        language,
        createdAt: localDateTime.localDateTime,
        localDate: localDateTime.localDate,
        localTime: localDateTime.localTime,
        signature: offerSignature,
        pdfTitle,
        pdfFileUri,
        source: "pdf"
      });

      await onDataChanged();

      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(pdfFileUri, {
          dialogTitle: pdfTitle,
          mimeType: "application/pdf",
          UTI: "com.adobe.pdf"
        });
      } else {
        Alert.alert("PDF izrađen", `PDF je spremljen kao ${fileName}.`);
      }
    } catch (error) {
      Alert.alert("Greška", error?.message || "PDF nije izrađen. Pokušajte ponovno.");
    } finally {
      setIsGenerating(false);
    }
  }

  async function handleGeneratePress() {
    const prepared = validateSelection();
    if (!prepared) {
      return;
    }

    const match = await findOfferBySignature(prepared.signature);
    if (match) {
      Alert.alert(
        "Provjera ispisa",
        `Before printing, check existing papers. This combination was already printed on ${formatOfferDateTime(
          match
        )}.`,
        [
          { text: "Odustani", style: "cancel" },
          { text: "Nastavi", onPress: () => generateOffer(prepared.items, prepared.signature) }
        ]
      );
      return;
    }

    await generateOffer(prepared.items, prepared.signature);
  }

  async function markHistory(items, offerSignature) {
    setIsMarking(true);

    try {
      await saveRequestedCustomDishes();
      await saveRequestedNewPrices();

      const localDateTime = getLocalDateTime();
      const pdfTitle =
        language === "hr"
          ? "Bistro Putnik - Marenda (zabilježeno)"
          : "Bistro Putnik - Daily Lunch (marked)";

      await addGeneratedOffer({
        id: createId("offer"),
        items,
        language,
        createdAt: localDateTime.localDateTime,
        localDate: localDateTime.localDate,
        localTime: localDateTime.localTime,
        signature: offerSignature,
        pdfTitle,
        pdfFileUri: "",
        source: "manual"
      });

      await onDataChanged();
      Alert.alert("Povijest spremljena", "Današnja 3 jela su spremljena u povijest.");
    } catch (error) {
      Alert.alert("Greška", error?.message || "Povijest nije spremljena. Pokušajte ponovno.");
    } finally {
      setIsMarking(false);
    }
  }

  async function handleMarkHistoryPress() {
    const prepared = validateSelection();
    if (!prepared) {
      return;
    }

    const match = await findOfferBySignature(prepared.signature);
    if (match) {
      Alert.alert(
        "Provjera povijesti",
        `Before printing, check existing papers. This combination was already printed on ${formatOfferDateTime(
          match
        )}.`,
        [
          { text: "Odustani", style: "cancel" },
          { text: "Spremi", onPress: () => markHistory(prepared.items, prepared.signature) }
        ]
      );
      return;
    }

    await markHistory(prepared.items, prepared.signature);
  }

  return (
    <View>
      <Section title="Dnevna marenda">
        <Text style={styles.helpText}>Pretražite knjižnicu ili dodajte novo jelo za današnji PDF.</Text>
        {slots.map((slot, index) => (
          <DishSlot
            key={`slot-${index}`}
            index={index}
            slot={slot}
            dishes={dishes}
            onSearch={(search) => updateSlot(index, { search })}
            onSelect={(dishId) => {
              if (dishId === customValue) {
                updateSlot(index, { mode: "custom", dishId: "", priceDisplay: "", newPrice: "" });
              } else {
                updateSlot(index, {
                  mode: "existing",
                  dishId,
                  priceMode: "existing",
                  priceDisplay: "",
                  newPrice: ""
                });
              }
            }}
            onPriceSelect={(value) => {
              if (value === newPriceValue) {
                updateSlot(index, { priceMode: "new", priceDisplay: "", newPrice: "" });
              } else {
                updateSlot(index, { priceMode: "existing", priceDisplay: value, newPrice: "" });
              }
            }}
            onNewPriceChange={(newPrice) => updateSlot(index, { newPrice })}
            onCustomChange={(field, value) => updateCustom(index, field, value)}
            onSaveToggle={(value) => updateSlot(index, { saveToLibrary: value })}
            onBackToLibrary={() =>
              updateSlot(index, { mode: "existing", dishId: "", priceDisplay: "", newPrice: "" })
            }
          />
        ))}
      </Section>

      <Section title="Jezik PDF-a">
        <SegmentedControl
          value={language}
          onChange={setLanguage}
          options={[
            { label: "HR", value: "hr" },
            { label: "EN", value: "en" }
          ]}
        />
      </Section>

      <PreviewSummary items={selectedItems} language={language} />

      {duplicateMatch ? (
        <Section title="Upozorenje" tone="warning">
          <Text style={styles.warningText}>
            Before printing, check existing papers. This combination was already printed on{" "}
            {formatOfferDateTime(duplicateMatch)}.
          </Text>
        </Section>
      ) : null}

      <View style={styles.bottomActions}>
        <PrimaryButton
          title={isGenerating ? "Izrada PDF-a..." : "Generiraj i podijeli PDF"}
          disabled={isGenerating || isMarking}
          onPress={handleGeneratePress}
        />
        <SecondaryButton
          title={isMarking ? "Spremanje..." : "Zabilježi u povijest"}
          onPress={handleMarkHistoryPress}
        />
      </View>
    </View>
  );
}

function DishSlot({
  index,
  slot,
  dishes,
  onSearch,
  onSelect,
  onPriceSelect,
  onNewPriceChange,
  onCustomChange,
  onSaveToggle,
  onBackToLibrary
}) {
  const filteredDishes = filterDishes(dishes, slot.search);
  const selectedDish = dishes.find((dish) => dish.id === slot.dishId);
  const displayDishes =
    selectedDish && !filteredDishes.some((dish) => dish.id === selectedDish.id)
      ? [selectedDish, ...filteredDishes]
      : filteredDishes;
  const priceOptions = getDishPriceOptions(selectedDish);
  const selectedPriceValue =
    slot.priceMode === "new" ? newPriceValue : slot.priceDisplay || priceOptions[0]?.priceDisplay || "";

  return (
    <View style={styles.slot}>
      <Text style={styles.slotTitle}>Jelo {index + 1}</Text>
      {slot.mode === "existing" ? (
        <View>
          <Field
            label="Pretraga jela"
            value={slot.search}
            onChangeText={onSearch}
            placeholder="Upišite naziv jela..."
          />
          <View style={styles.pickerWrap}>
            <Picker selectedValue={slot.dishId} onValueChange={onSelect} mode="dropdown">
              <Picker.Item label="Odaberi jelo..." value="" />
              {displayDishes.map((dish) => (
                <Picker.Item
                  key={dish.id}
                  label={`${dish.nameHr} - ${dish.priceDisplay}`}
                  value={dish.id}
                />
              ))}
              <Picker.Item label="+ Novo jelo" value={customValue} />
            </Picker>
          </View>
          {selectedDish ? (
            <View style={styles.priceBlock}>
              <Text style={styles.priceLabel}>Cijena za današnji PDF</Text>
              <View style={styles.pickerWrap}>
                <Picker selectedValue={selectedPriceValue} onValueChange={onPriceSelect} mode="dropdown">
                  {priceOptions.map((option) => (
                    <Picker.Item
                      key={`${selectedDish.id}-${option.priceDisplay}`}
                      label={option.priceDisplay}
                      value={option.priceDisplay}
                    />
                  ))}
                  <Picker.Item label="+ Dodaj novu cijenu" value={newPriceValue} />
                </Picker>
              </View>
              {priceOptions.length > 1 ? (
                <Text style={styles.priceHelp}>Ovo jelo ima više spremljenih cijena.</Text>
              ) : null}
              {slot.priceMode === "new" ? (
                <Field
                  label="Nova cijena"
                  value={slot.newPrice}
                  onChangeText={onNewPriceChange}
                  keyboardType="decimal-pad"
                  placeholder="npr. 12 ili 12,50"
                />
              ) : null}
            </View>
          ) : null}
        </View>
      ) : (
        <View>
          <Field
            label="Naziv HR"
            value={slot.custom.nameHr}
            onChangeText={(value) => onCustomChange("nameHr", value)}
            placeholder="npr. Pašticada s njokima"
          />
          <Field
            label="Naziv EN"
            value={slot.custom.nameEn}
            onChangeText={(value) => onCustomChange("nameEn", value)}
            placeholder="npr. Beef stew with gnocchi"
          />
          <Field
            label="Opis HR"
            value={slot.custom.descriptionHr}
            onChangeText={(value) => onCustomChange("descriptionHr", value)}
            multiline
            placeholder="Kratki opis za PDF"
          />
          <Field
            label="Opis EN"
            value={slot.custom.descriptionEn}
            onChangeText={(value) => onCustomChange("descriptionEn", value)}
            multiline
            placeholder="Short English description"
          />
          <Field
            label="Cijena"
            value={slot.custom.price}
            onChangeText={(value) => onCustomChange("price", value)}
            keyboardType="decimal-pad"
            placeholder="9,50"
          />
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Spremi u knjižnicu</Text>
            <Switch
              value={slot.saveToLibrary}
              onValueChange={onSaveToggle}
              trackColor={{ false: colors.divider, true: colors.sand }}
              thumbColor={slot.saveToLibrary ? colors.teal : colors.white}
            />
          </View>
          <SecondaryButton title="Natrag na popis" onPress={onBackToLibrary} />
        </View>
      )}
    </View>
  );
}

function PreviewSummary({ items, language }) {
  return (
    <Section title="Pregled">
      {items.length === 0 ? (
        <Text style={styles.helpText}>Odabrana jela pojavit će se ovdje.</Text>
      ) : (
        items.map((item, index) => (
          <View key={`${displayName(item, language)}-${index}`} style={styles.previewRow}>
            <View style={styles.previewIndex}>
              <Text style={styles.previewIndexText}>{index + 1}</Text>
            </View>
            <View style={styles.previewCopy}>
              <Text style={styles.previewName}>{displayName(item, language)}</Text>
              <Text style={styles.previewDescription}>
                {language === "en" ? item.descriptionEn : item.descriptionHr}
              </Text>
            </View>
            <Text style={styles.previewPrice}>{item.priceDisplay}</Text>
          </View>
        ))
      )}
    </Section>
  );
}

const styles = StyleSheet.create({
  helpText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: spacing.md
  },
  slot: {
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    paddingTop: spacing.md,
    marginTop: spacing.md
  },
  slotTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.sm
  },
  pickerWrap: {
    borderColor: colors.divider,
    borderRadius: radius.sm,
    borderWidth: 1,
    overflow: "hidden"
  },
  priceBlock: {
    marginTop: spacing.md
  },
  priceLabel: {
    color: colors.teal,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: spacing.xs
  },
  priceHelp: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: spacing.xs,
    marginBottom: spacing.sm
  },
  switchRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.md
  },
  switchLabel: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600"
  },
  previewRow: {
    alignItems: "flex-start",
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    flexDirection: "row",
    gap: spacing.md,
    paddingVertical: spacing.md
  },
  previewIndex: {
    alignItems: "center",
    backgroundColor: colors.sandSoft,
    borderRadius: 18,
    height: 32,
    justifyContent: "center",
    width: 32
  },
  previewIndexText: {
    color: colors.teal,
    fontWeight: "700"
  },
  previewCopy: {
    flex: 1
  },
  previewName: {
    color: colors.teal,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.xs
  },
  previewDescription: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18
  },
  previewPrice: {
    color: colors.teal,
    fontSize: 14,
    fontWeight: "700"
  },
  warningText: {
    color: colors.warning,
    fontSize: 14,
    lineHeight: 20
  },
  bottomActions: {
    gap: spacing.md
  }
});
