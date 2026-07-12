import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Section } from "./Section";
import { Field, PrimaryButton, SecondaryButton, SegmentedControl } from "./FormControls";
import { deleteGeneratedOffer, updateGeneratedOffer } from "../db/database";
import { createPdfFileName, formatOfferDateTime, getLocalDateTime } from "../helpers/datetime";
import { formatPriceDisplay, parsePrice } from "../helpers/format";
import { createOfferSignature } from "../helpers/signature";
import { colors, spacing } from "../styles/theme";

function itemLabel(item, language) {
  return language === "en" ? item.nameEn || item.nameHr : item.nameHr || item.nameEn;
}

function emptyHistoryItem(index) {
  return {
    id: `history-item-${index}`,
    nameHr: "",
    nameEn: "",
    descriptionHr: "",
    descriptionEn: "",
    price: 0,
    priceDisplay: ""
  };
}

function offerToForm(offer) {
  const items = [0, 1, 2].map((index) => ({
    ...emptyHistoryItem(index),
    ...(offer.items?.[index] || {})
  }));

  return {
    id: offer.id,
    pdfTitle: offer.pdfTitle || "",
    localDate: offer.localDate || "",
    localTime: offer.localTime || "",
    language: offer.language || "hr",
    source: offer.source || "pdf",
    pdfFileUri: offer.pdfFileUri || "",
    items
  };
}

function escapeCsv(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }

  return text;
}

function historyToCsv(history) {
  const header = [
    "createdAt",
    "localDate",
    "localTime",
    "language",
    "source",
    "title",
    "signature",
    "dish1Hr",
    "dish1En",
    "dish1Price",
    "dish2Hr",
    "dish2En",
    "dish2Price",
    "dish3Hr",
    "dish3En",
    "dish3Price",
    "pdfFileUri"
  ];

  const rows = history.map((offer) => {
    const items = [0, 1, 2].map((index) => offer.items?.[index] || {});
    return [
      offer.createdAt,
      offer.localDate,
      offer.localTime,
      offer.language,
      offer.source || "pdf",
      offer.pdfTitle,
      offer.signature,
      items[0].nameHr,
      items[0].nameEn,
      items[0].priceDisplay,
      items[1].nameHr,
      items[1].nameEn,
      items[1].priceDisplay,
      items[2].nameHr,
      items[2].nameEn,
      items[2].priceDisplay,
      offer.pdfFileUri
    ];
  });

  return [header, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n");
}

export function PrintHistoryScreen({ history, onDataChanged }) {
  const [editingId, setEditingId] = useState("");
  const [form, setForm] = useState(null);
  const [isExporting, setIsExporting] = useState(false);

  function startEdit(offer) {
    setEditingId(offer.id);
    setForm(offerToForm(offer));
  }

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function updateItem(index, field, value) {
    setForm((current) => ({
      ...current,
      items: current.items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      )
    }));
  }

  async function sharePdf(offer) {
    if (!offer.pdfFileUri) {
      Alert.alert("PDF nije pronađen", "Ovaj zapis nema spremljenu PDF lokaciju.");
      return;
    }

    const canShare = await Sharing.isAvailableAsync();
    if (!canShare) {
      Alert.alert("Dijeljenje nije dostupno", offer.pdfFileUri);
      return;
    }

    await Sharing.shareAsync(offer.pdfFileUri, {
      dialogTitle: offer.pdfTitle,
      mimeType: "application/pdf",
      UTI: "com.adobe.pdf"
    });
  }

  async function exportHistory() {
    if (history.length === 0) {
      Alert.alert("Nema podataka", "Povijest je prazna.");
      return;
    }

    setIsExporting(true);
    try {
      const localDateTime = getLocalDateTime();
      const fileName = createPdfFileName("history", localDateTime).replace(".pdf", ".csv");
      const file = new File(Paths.document, fileName);

      if (file.exists) {
        file.delete();
      }
      file.write(historyToCsv(history));

      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(file.uri, {
          dialogTitle: "Bistro Putnik - povijest marendi",
          mimeType: "text/csv"
        });
      } else {
        Alert.alert("Export spremljen", file.uri);
      }
    } catch (error) {
      Alert.alert("Greška", error?.message || "Povijest nije eksportirana.");
    } finally {
      setIsExporting(false);
    }
  }

  function showDetails(offer) {
    const details = offer.items
      .map((item, index) => `${index + 1}. ${itemLabel(item, offer.language)} - ${item.priceDisplay}`)
      .join("\n");

    Alert.alert(
      offer.pdfTitle,
      `${formatOfferDateTime(offer)}\n${offer.language.toUpperCase()}\n${offer.source || "pdf"}\n\n${details}\n\n${offer.signature}`
    );
  }

  async function saveEdit() {
    if (!form) {
      return;
    }

    const items = form.items.map((item, index) => {
      const price = parsePrice(item.priceDisplay || item.price);
      return {
        ...item,
        id: item.id || `history-item-${index}`,
        nameHr: item.nameHr.trim(),
        nameEn: item.nameEn.trim(),
        descriptionHr: item.descriptionHr.trim(),
        descriptionEn: item.descriptionEn.trim(),
        price,
        priceDisplay: item.priceDisplay.trim() || formatPriceDisplay(price)
      };
    });

    if (
      !form.localDate.trim() ||
      !form.localTime.trim() ||
      items.some((item) => !item.nameHr || !item.nameEn || !item.priceDisplay)
    ) {
      Alert.alert("Nedostaju podaci", "Datum, vrijeme, nazivi jela i cijene su obavezni.");
      return;
    }

    const localTime = form.localTime.length === 5 ? form.localTime : form.localTime.slice(0, 5);
    await updateGeneratedOffer({
      id: form.id,
      items,
      language: form.language,
      createdAt: `${form.localDate}T${localTime}:00`,
      localDate: form.localDate,
      localTime,
      signature: createOfferSignature(items),
      pdfTitle: form.pdfTitle.trim() || "Bistro Putnik - Marenda",
      pdfFileUri: form.pdfFileUri,
      source: form.source
    });

    setEditingId("");
    setForm(null);
    await onDataChanged();
  }

  function confirmDelete(offer) {
    Alert.alert("Brisanje povijesti", `Obrisati zapis "${offer.pdfTitle}"?`, [
      { text: "Odustani", style: "cancel" },
      {
        text: "Obriši",
        style: "destructive",
        onPress: async () => {
          await deleteGeneratedOffer(offer.id);
          if (editingId === offer.id) {
            setEditingId("");
            setForm(null);
          }
          await onDataChanged();
        }
      }
    ]);
  }

  return (
    <View>
      <Section title="Povijest marendi">
        <PrimaryButton
          title={isExporting ? "Export..." : "Izvezi svu povijest"}
          disabled={isExporting || history.length === 0}
          onPress={exportHistory}
        />
        <Text style={styles.exportHelp}>
          Export sprema CSV s datumom, vremenom, jezikom i sva tri jela po zapisu.
        </Text>
      </Section>

      <Section title="Zapisani dani">
        {history.length === 0 ? (
          <Text style={styles.emptyText}>Još nema spremljenih marendi.</Text>
        ) : (
          history.map((offer) => (
            <View key={offer.id} style={styles.historyRow}>
              {editingId === offer.id && form ? (
                <HistoryEditForm
                  form={form}
                  onFormChange={updateForm}
                  onItemChange={updateItem}
                  onSave={saveEdit}
                  onCancel={() => {
                    setEditingId("");
                    setForm(null);
                  }}
                />
              ) : (
                <HistoryEntry
                  offer={offer}
                  onDetails={() => showDetails(offer)}
                  onShare={() => sharePdf(offer)}
                  onEdit={() => startEdit(offer)}
                  onDelete={() => confirmDelete(offer)}
                />
              )}
            </View>
          ))
        )}
      </Section>
    </View>
  );
}

function HistoryEntry({ offer, onDetails, onShare, onEdit, onDelete }) {
  return (
    <View>
      <View style={styles.historyHeader}>
        <Text style={styles.title}>{offer.pdfTitle}</Text>
        <Text style={styles.language}>
          {offer.language.toUpperCase()} / {(offer.source || "pdf").toUpperCase()}
        </Text>
      </View>
      <Text style={styles.meta}>{formatOfferDateTime(offer)}</Text>
      {offer.items.map((item, index) => (
        <Text key={`${offer.id}-${index}`} style={styles.item}>
          {index + 1}. {itemLabel(item, offer.language)} - {item.priceDisplay}
        </Text>
      ))}
      <Text style={styles.signature}>{offer.signature}</Text>
      <View style={styles.actions}>
        <SecondaryButton title="Detalji" onPress={onDetails} />
        {offer.pdfFileUri ? <SecondaryButton title="Podijeli PDF" onPress={onShare} /> : null}
        <SecondaryButton title="Uredi" onPress={onEdit} />
        <SecondaryButton title="Obriši" destructive onPress={onDelete} />
      </View>
    </View>
  );
}

function HistoryEditForm({ form, onFormChange, onItemChange, onSave, onCancel }) {
  return (
    <View>
      <Text style={styles.editTitle}>Uredi zapis</Text>
      <Field
        label="Naslov"
        value={form.pdfTitle}
        onChangeText={(value) => onFormChange("pdfTitle", value)}
      />
      <View style={styles.twoColumns}>
        <View style={styles.column}>
          <Field
            label="Datum"
            value={form.localDate}
            onChangeText={(value) => onFormChange("localDate", value)}
            placeholder="YYYY-MM-DD"
          />
        </View>
        <View style={styles.column}>
          <Field
            label="Vrijeme"
            value={form.localTime}
            onChangeText={(value) => onFormChange("localTime", value)}
            placeholder="HH:MM"
          />
        </View>
      </View>
      <SegmentedControl
        value={form.language}
        onChange={(value) => onFormChange("language", value)}
        options={[
          { label: "HR", value: "hr" },
          { label: "EN", value: "en" }
        ]}
      />
      {form.items.map((item, index) => (
        <View key={`${form.id}-${index}`} style={styles.editItem}>
          <Text style={styles.editItemTitle}>Jelo {index + 1}</Text>
          <Field
            label="Naziv HR"
            value={item.nameHr}
            onChangeText={(value) => onItemChange(index, "nameHr", value)}
          />
          <Field
            label="Naziv EN"
            value={item.nameEn}
            onChangeText={(value) => onItemChange(index, "nameEn", value)}
          />
          <Field
            label="Opis HR"
            value={item.descriptionHr}
            onChangeText={(value) => onItemChange(index, "descriptionHr", value)}
            multiline
          />
          <Field
            label="Opis EN"
            value={item.descriptionEn}
            onChangeText={(value) => onItemChange(index, "descriptionEn", value)}
            multiline
          />
          <Field
            label="Cijena"
            value={item.priceDisplay}
            onChangeText={(value) => onItemChange(index, "priceDisplay", value)}
          />
        </View>
      ))}
      <View style={styles.actions}>
        <PrimaryButton title="Spremi zapis" onPress={onSave} />
        <SecondaryButton title="Odustani" onPress={onCancel} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20
  },
  exportHelp: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
    marginTop: spacing.sm
  },
  historyRow: {
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    paddingVertical: spacing.md
  },
  historyHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xs
  },
  title: {
    color: colors.teal,
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    paddingRight: spacing.md
  },
  language: {
    color: colors.teal,
    fontSize: 12,
    fontWeight: "700"
  },
  meta: {
    color: colors.muted,
    fontSize: 13,
    marginBottom: spacing.sm
  },
  item: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 21
  },
  signature: {
    color: colors.muted,
    fontSize: 11,
    marginTop: spacing.sm
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: spacing.md
  },
  editTitle: {
    color: colors.teal,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.md
  },
  editItem: {
    borderTopColor: colors.divider,
    borderTopWidth: 1,
    marginTop: spacing.md,
    paddingTop: spacing.md
  },
  editItemTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: spacing.sm
  },
  twoColumns: {
    flexDirection: "row",
    gap: spacing.md
  },
  column: {
    flex: 1
  }
});
