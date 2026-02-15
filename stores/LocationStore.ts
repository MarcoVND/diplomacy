import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Location, LocationState } from "@/types/location";

export const useLocationStore = create<LocationState>()(
  persist(
    (set) => ({
      isLocationEnabled: false,
      currentLocation: null,
      isLoading: false,
      error: null,

      setLocationEnabled: (enabled: boolean) =>
        set(() => ({ isLocationEnabled: enabled })),

      setCurrentLocation: (location: Location | null) =>
        set(() => ({ currentLocation: location })),

      setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),

      setError: (error: string | null) => set(() => ({ error })),

      clearLocation: () =>
        set(() => ({ currentLocation: null, error: null })),
    }),
    {
      name: "location-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        isLocationEnabled: state.isLocationEnabled,
        currentLocation: state.currentLocation,
      }),
    }
  )
);
