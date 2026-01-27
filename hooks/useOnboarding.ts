import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

const ONBOARDING_KEY = "hasViewedOnboarding";

export const useOnboarding = (check = true) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (check) {
      checkOnboarding();
    } else {
      setLoading(false);
    }
  }, [check]);

  const checkOnboarding = async () => {
    try {
      const viewed = await AsyncStorage.getItem(ONBOARDING_KEY);

      if (viewed === "true") {
        router.replace("/(drawer)/chat");
      } else {
        router.replace("/SelectAssistant");
      }
    } catch (error) {
      console.error("Error checking onboarding status:", error);
    } finally {
      setLoading(false);
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, "true");
      router.replace("/(drawer)/chat");
    } catch (error) {
      console.error("Error completing onboarding:", error);
    }
  };

  const resetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem(ONBOARDING_KEY);
      router.replace("/");
    } catch (error) {
      console.error("Error resetting onboarding:", error);
    }
  };

  return {
    loading,
    completeOnboarding,
    resetOnboarding,
  };
};
