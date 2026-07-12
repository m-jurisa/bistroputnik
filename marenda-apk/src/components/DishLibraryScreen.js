import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Section } from "./Section";
import { Field, PrimaryButton, SecondaryButton } from "./FormControls";
import { createId, deleteDish, saveDish } from "../db/database";
import {
  allergensToInput,
  formatPriceDisplay,
  normalizePriceOptions,
  parseAllergens,
  parsePrice,
  priceOptionsToInput
} from "../helpers/format";
import { colors, spacing } from "../styles/theme";

function emptyForm() {
  return {
    id: "",
    nameHr: "",
    nameEn: "",
    descriptionHr: "",
    descriptionEn: "",
    price: "",
    priceDisplay: "",
    priceOptions: "",
    allergens: ""
  };
}

function dishToForm(dish) {
  return {
    id: dish.id,
    nameHr: dish.nameHr,
    nameEn: dish.nameEn,
    descriptionHr: dish.descriptionHr,
    descriptionEn: dish.descriptionEn,
    price: String(dish.price).replace(".", ","),
    priceDisplay: dish.priceDisplay,
    priceOptions: priceOptionsToInput(dish.priceOptions),
    allergens: allergensToInput(dish.allergens)
  };
}

export function DishLibraryScreen({ dishes, onDataChanged }) {
  const [form, setForm] = useState(emptyForm());

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSave() {
    const price = parsePrice(form.price);
    if (
      !form.nameHr.trim() ||
      !form.nameEn.trim() ||
      !form.descriptionHr.trim() ||
      !form.descriptionEn.trim() ||
      price <= 0
    ) {
      Alert.alert("Nedostaju podaci", "Nazivi, opisi i cijena su obavezni.");
      return;
    }

    const priceDisplay = form.priceDisplay.trim() || formatPriceDisplay(price);
    const priceOptions = normalizePriceOptions(form.priceOptions, price, priceDisplay);

    await saveDish({
      id: form.id || createId("dish"),
      nameHr: form.nameHr.trim(),
      nameEn: form.nameEn.trim(),
      descriptionHr: form.descriptionHr.trim(),
      descriptionEn: form.descriptionEn.trim(),
      price,
      priceDisplay,
      priceOptions,
      allergens: parseAllergens(form.allergens)
    });

    setForm(emptyForm());
    await onDataChanged();
  }

  function confirmDelete(dish) {
    Alert.alert("Brisanje jela", `Obrisati "${dish.nameHr}" iz knjižnice?`, [
      { text: "Odustani", style: "cancel" },
      {
        text: "Obriši",
        style: "destructive",
        onPress: async () => {
          await deleteDish(dish.id);
          if (form.id === dish.id) {
            setForm(emptyForm());
          }
          await onDataChanged();
        }
      }
    ]);
  }

  return (
    <View>
      <Section title={form.id ? "Uredi jelo" : "Dodaj jelo"}>
        <Field
          label="Naziv HR"
          value={form.nameHr}
          onChangeText={(value) => updateForm("nameHr", value)}
        />
        <Field
          label="Naziv EN"
          value={form.nameEn}
          onChangeText={(value) => updateForm("nameEn", value)}
        />
        <Field
          label="Opis HR"
          value={form.descriptionHr}
          onChangeText={(value) => updateForm("descriptionHr", value)}
          multiline
        />
        <Field
          label="Opis EN"
          value={form.descriptionEn}
          onChangeText={(value) => updateForm("descriptionEn", value)}
          multiline
        />
        <Field
          label="Cijena"
          value={form.price}
          onChangeText={(value) => updateForm("price", value)}
          keyboardType="decimal-pad"
          placeholder="8,50"
        />
        <Field
          label="Prikaz cijene"
          value={form.priceDisplay}
          onChangeText={(value) => updateForm("priceDisplay", value)}
          placeholder="automatski, npr. 8,50 EUR"
        />
        <Field
          label="Spremljene cijene"
          value={form.priceOptions}
          onChangeText={(value) => updateForm("priceOptions", value)}
          placeholder="npr. 10 €; 12 €; 12,50 €"
        />
        <Field
          label="Alergeni"
          value={form.allergens}
          onChangeText={(value) => updateForm("allergens", value)}
          placeholder="gluten, fish"
        />
        <PrimaryButton title={form.id ? "Spremi izmjene" : "Dodaj u knjižnicu"} onPress={handleSave} />
        {form.id ? (
          <View style={styles.cancelEdit}>
            <SecondaryButton title="Odustani od uređivanja" onPress={() => setForm(emptyForm())} />
          </View>
        ) : null}
      </Section>

      <Section title="Knjižnica jela">
        {dishes.map((dish) => (
          <View key={dish.id} style={styles.dishRow}>
            <View style={styles.dishCopy}>
              <Text style={styles.dishName}>{dish.nameHr}</Text>
              <Text style={styles.dishMeta}>{dish.nameEn}</Text>
              <Text style={styles.dishMeta}>{dish.priceDisplay}</Text>
              {dish.priceOptions?.length > 1 ? (
                <Text style={styles.dishMeta}>
                  Cijene: {dish.priceOptions.map((option) => option.priceDisplay).join(", ")}
                </Text>
              ) : null}
            </View>
            <View style={styles.actions}>
              <SecondaryButton title="Uredi" onPress={() => setForm(dishToForm(dish))} />
              <SecondaryButton title="Obriši" destructive onPress={() => confirmDelete(dish)} />
            </View>
          </View>
        ))}
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  cancelEdit: {
    marginTop: spacing.md
  },
  dishRow: {
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    paddingVertical: spacing.md
  },
  dishCopy: {
    marginBottom: spacing.sm
  },
  dishName: {
    color: colors.teal,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.xs
  },
  dishMeta: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18
  },
  actions: {
    flexDirection: "row",
    gap: spacing.sm
  }
});
