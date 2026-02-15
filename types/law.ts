export interface LawArticle {
  number: number;
  title: string;
  content: string;
}

export interface Law {
  id: string;
  name: string;
  description: string;
  country: string;
  city: string;
  articles: LawArticle[];
  lastUpdated: string;
}

export interface LawState {
  laws: Law[];
  selectedLaw: Law | null;
  isLoading: boolean;
  error: string | null;
  setLaws: (laws: Law[]) => void;
  selectLaw: (law: Law | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearLaws: () => void;
}
