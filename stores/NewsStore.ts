import { create } from "zustand";
import type { NewsItem, NewsState } from "@/types/news";

const MOCK_NEWS: NewsItem[] = [
  {
    id: "1",
    title: "New legislation affects contract law",
    summary: "Recent changes to contract law will impact how businesses negotiate agreements. Learn more about the implications.",
    publishedAt: "2 hours ago",
    source: "Legal News",
  },
  {
    id: "2",
    title: "Supreme Court ruling on property rights",
    summary: "The Supreme Court has issued a landmark ruling regarding property rights that could affect landowners nationwide.",
    publishedAt: "5 hours ago",
    source: "Court Watch",
  },
  {
    id: "3",
    title: "Corporate law updates for 2024",
    summary: "New regulations for corporations will take effect next month. Here's what your business needs to know.",
    publishedAt: "1 day ago",
    source: "Business Law",
  },
  {
    id: "4",
    title: "Intellectual property in the AI era",
    summary: "How artificial intelligence is reshaping intellectual property law and what creators need to understand.",
    publishedAt: "2 days ago",
    source: "IP Law",
  },
  {
    id: "5",
    title: "Employment law changes",
    summary: "Recent updates to employment law will affect hiring practices and worker classifications.",
    publishedAt: "3 days ago",
    source: "Labor Law",
  },
  {
    id: "6",
    title: "International trade agreements",
    summary: "New trade agreements between countries will have significant implications for international business.",
    publishedAt: "4 days ago",
    source: "Trade Law",
  },
];

export const useNewsStore = create<NewsState>((set) => ({
  news: MOCK_NEWS,
  isLoading: false,
  selectedNewsId: null,

  setNews: (news: NewsItem[]) => set(() => ({ news })),

  setLoading: (isLoading: boolean) => set(() => ({ isLoading })),

  selectNews: (id: string | null) => set(() => ({ selectedNewsId: id })),

  clearNews: () => set(() => ({ news: [] })),
}));
