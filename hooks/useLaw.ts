import { useCallback } from "react";
import { useLawStore } from "@/stores/LawStore";
import { useLocationStore } from "@/stores/LocationStore";
import type { Law } from "@/types/law";

export function useLaw() {
  const {
    laws,
    selectedLaw,
    isLoading,
    error,
    selectLaw,
    setLoading,
    setError,
  } = useLawStore();

  const { currentLocation, isLocationEnabled } = useLocationStore();

  const getLawsByLocation = useCallback((): Law[] => {
    if (!isLocationEnabled || !currentLocation) {
      return laws;
    }

    return laws.filter(
      (law) =>
        law.country.toLowerCase() === currentLocation.country.toLowerCase() ||
        law.city.toLowerCase() === currentLocation.city.toLowerCase()
    );
  }, [laws, currentLocation, isLocationEnabled]);

  const getAllLaws = useCallback((): Law[] => {
    return laws;
  }, [laws]);

  const handleSelectLaw = useCallback(
    (law: Law | null) => {
      selectLaw(law);
    },
    [selectLaw]
  );

  const filteredLaws = getLawsByLocation();

  return {
    laws: filteredLaws,
    allLaws: getAllLaws(),
    selectedLaw,
    isLoading,
    error,
    handleSelectLaw,
    currentLocation,
    isLocationEnabled,
  };
}
