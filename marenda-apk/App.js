import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { DailyOfferScreen } from "./src/components/DailyOfferScreen";
import { DishLibraryScreen } from "./src/components/DishLibraryScreen";
import { PrintHistoryScreen } from "./src/components/PrintHistoryScreen";
import { SegmentedControl } from "./src/components/FormControls";
import { getDishes, getGeneratedOffers, initDatabase } from "./src/db/database";
import { colors, spacing } from "./src/styles/theme";

const screens = [
  { label: "Marenda", value: "home" },
  { label: "Jela", value: "library" },
  { label: "Povijest", value: "history" }
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [isReady, setIsReady] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [history, setHistory] = useState([]);

  async function reloadData() {
    const [nextDishes, nextHistory] = await Promise.all([getDishes(), getGeneratedOffers()]);
    setDishes(nextDishes);
    setHistory(nextHistory);
  }

  useEffect(() => {
    let mounted = true;

    async function bootstrap() {
      await initDatabase();
      const [nextDishes, nextHistory] = await Promise.all([getDishes(), getGeneratedOffers()]);
      if (mounted) {
        setDishes(nextDishes);
        setHistory(nextHistory);
        setIsReady(true);
      }
    }

    bootstrap();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.teal} />
      <View style={styles.header}>
        <Text style={styles.brand}>Bistro Putnik</Text>
        <Text style={styles.subtitle}>Marenda management</Text>
      </View>

      <View style={styles.tabs}>
        <SegmentedControl value={screen} options={screens} onChange={setScreen} />
      </View>

      {!isReady ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.teal} />
          <Text style={styles.loadingText}>Učitavanje lokalne baze...</Text>
        </View>
      ) : (
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentInner}
          keyboardShouldPersistTaps="handled"
        >
          {screen === "home" ? (
            <DailyOfferScreen dishes={dishes} onDataChanged={reloadData} />
          ) : null}
          {screen === "library" ? (
            <DishLibraryScreen dishes={dishes} onDataChanged={reloadData} />
          ) : null}
          {screen === "history" ? (
            <PrintHistoryScreen history={history} onDataChanged={reloadData} />
          ) : null}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.teal,
    flex: 1
  },
  header: {
    backgroundColor: colors.teal,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md
  },
  brand: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0
  },
  subtitle: {
    color: colors.sand,
    fontSize: 13,
    fontWeight: "700",
    marginTop: spacing.xs
  },
  tabs: {
    backgroundColor: colors.paper,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm
  },
  content: {
    backgroundColor: colors.paper,
    flex: 1
  },
  contentInner: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl
  },
  loading: {
    alignItems: "center",
    backgroundColor: colors.paper,
    flex: 1,
    justifyContent: "center"
  },
  loadingText: {
    color: colors.muted,
    fontSize: 14,
    marginTop: spacing.md
  }
});
