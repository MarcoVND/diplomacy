export interface Location {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface LocationState {
  isLocationEnabled: boolean;
  currentLocation: Location | null;
  isLoading: boolean;
  error: string | null;
  setLocationEnabled: (enabled: boolean) => void;
  setCurrentLocation: (location: Location | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearLocation: () => void;
}
