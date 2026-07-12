import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing } from "../styles/theme";

export function Section({ title, children, tone = "default" }) {
  return (
    <View style={[styles.section, tone === "warning" && styles.warning]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.white,
    borderColor: colors.divider,
    borderRadius: radius.md,
    borderWidth: 1,
    marginBottom: spacing.lg,
    padding: spacing.lg
  },
  warning: {
    backgroundColor: colors.warningBg,
    borderColor: colors.sand
  },
  title: {
    color: colors.teal,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: spacing.md
  }
});
