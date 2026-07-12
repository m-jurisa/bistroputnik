import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, radius, spacing } from "../styles/theme";

export function Field({ label, value, onChangeText, placeholder, multiline, keyboardType }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        multiline={multiline}
        keyboardType={keyboardType}
      />
    </View>
  );
}

export function PrimaryButton({ title, onPress, disabled }) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.primaryButton,
        pressed && !disabled && styles.buttonPressed,
        disabled && styles.buttonDisabled
      ]}
    >
      <Text style={styles.primaryButtonText}>{title}</Text>
    </Pressable>
  );
}

export function SecondaryButton({ title, onPress, destructive }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.secondaryButton,
        destructive && styles.destructiveButton,
        pressed && styles.buttonPressed
      ]}
    >
      <Text style={[styles.secondaryButtonText, destructive && styles.destructiveButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
}

export function SegmentedControl({ value, options, onChange }) {
  return (
    <View style={styles.segmented}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <Pressable
            accessibilityRole="button"
            key={option.value}
            onPress={() => onChange(option.value)}
            style={[styles.segment, active && styles.segmentActive]}
          >
            <Text style={[styles.segmentText, active && styles.segmentTextActive]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: spacing.md
  },
  label: {
    color: colors.teal,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: spacing.xs
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.divider,
    borderRadius: radius.sm,
    borderWidth: 1,
    color: colors.text,
    fontSize: 16,
    minHeight: 48,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  textArea: {
    minHeight: 82,
    textAlignVertical: "top"
  },
  primaryButton: {
    alignItems: "center",
    backgroundColor: colors.teal,
    borderRadius: radius.sm,
    minHeight: 52,
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700"
  },
  secondaryButton: {
    alignItems: "center",
    borderColor: colors.teal,
    borderRadius: radius.sm,
    borderWidth: 1,
    minHeight: 46,
    justifyContent: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  secondaryButtonText: {
    color: colors.teal,
    fontSize: 15,
    fontWeight: "700"
  },
  destructiveButton: {
    borderColor: colors.danger
  },
  destructiveButtonText: {
    color: colors.danger
  },
  buttonPressed: {
    opacity: 0.8
  },
  buttonDisabled: {
    backgroundColor: colors.muted
  },
  segmented: {
    backgroundColor: colors.paper,
    borderColor: colors.divider,
    borderRadius: radius.sm,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden"
  },
  segment: {
    alignItems: "center",
    flex: 1,
    minHeight: 44,
    justifyContent: "center",
    paddingHorizontal: spacing.md
  },
  segmentActive: {
    backgroundColor: colors.teal
  },
  segmentText: {
    color: colors.teal,
    fontSize: 14,
    fontWeight: "700"
  },
  segmentTextActive: {
    color: colors.white
  }
});
