import { useCallback, useEffect, useRef } from "react";
import * as ExpoLocation from "expo-location";
import { useLocationStore } from "@/stores/LocationStore";

export function useLocation() {
  const {
    isLocationEnabled,
    currentLocation,
    isLoading,
    error,
    setLocationEnabled,
    setCurrentLocation,
    setLoading,
    setError,
    clearLocation,
  } = useLocationStore();

  const locationSubscriptionRef = useRef<ExpoLocation.LocationSubscription | null>(null);

  const requestLocationPermission = useCallback(async (): Promise<boolean> => {
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
    return status === "granted";
  }, []);

  const reverseGeocode = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const [address] = await ExpoLocation.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (address) {
          const newLocation = {
            city: address.city || address.subregion || "Unknown",
            country: address.country || "Unknown",
            latitude,
            longitude,
          };

          setCurrentLocation(newLocation);
        }
      } catch (err) {
        console.error("Reverse geocode error:", err);
      }
    },
    [setCurrentLocation]
  );

  const startWatchingLocation = useCallback(async () => {
    try {
      const hasPermission = await requestLocationPermission();

      if (!hasPermission) {
        setError("Location permission denied");
        return;
      }

      locationSubscriptionRef.current = await ExpoLocation.watchPositionAsync(
        {
          accuracy: ExpoLocation.Accuracy.Balanced,
          timeInterval: 10000,
          distanceInterval: 500,
        },
        (location) => {
          reverseGeocode(location.coords.latitude, location.coords.longitude);
        }
      );
    } catch (err) {
      console.error("Error watching location:", err);
      setError("Failed to watch location");
    }
  }, [requestLocationPermission, reverseGeocode, setError]);

  const stopWatchingLocation = useCallback(() => {
    if (locationSubscriptionRef.current) {
      locationSubscriptionRef.current.remove();
      locationSubscriptionRef.current = null;
    }
  }, []);

  const getCurrentLocation = useCallback(async () => {
    if (!isLocationEnabled) {
      setError("Location is disabled");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const hasPermission = await requestLocationPermission();

      if (!hasPermission) {
        setError("Location permission denied");
        setLoading(false);
        return;
      }

      const location = await ExpoLocation.getCurrentPositionAsync({
        accuracy: ExpoLocation.Accuracy.Balanced,
      });

      await reverseGeocode(location.coords.latitude, location.coords.longitude);
    } catch (err) {
      setError("Failed to get location");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [isLocationEnabled, requestLocationPermission, reverseGeocode, setCurrentLocation, setLoading, setError]);

  const toggleLocation = useCallback(
    async (enabled: boolean) => {
      setLocationEnabled(enabled);

      if (enabled) {
        await getCurrentLocation();
        await startWatchingLocation();
      } else {
        stopWatchingLocation();
        clearLocation();
      }
    },
    [getCurrentLocation, startWatchingLocation, stopWatchingLocation, clearLocation, setLocationEnabled]
  );

  useEffect(() => {
    if (isLocationEnabled && !currentLocation) {
      getCurrentLocation();
      startWatchingLocation();
    }

    return () => {
      stopWatchingLocation();
    };
  }, []);

  return {
    isLocationEnabled,
    currentLocation,
    isLoading,
    error,
    toggleLocation,
    getCurrentLocation,
    requestLocationPermission,
  };
}
