export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  source: string;
}

export interface NewsState {
  news: NewsItem[];
  isLoading: boolean;
  selectedNewsId: string | null;
  setNews: (news: NewsItem[]) => void;
  setLoading: (loading: boolean) => void;
  selectNews: (id: string | null) => void;
  clearNews: () => void;
}
