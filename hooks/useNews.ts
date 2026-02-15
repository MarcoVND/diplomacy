import { useCallback } from "react";
import { useNewsStore } from "@/stores/NewsStore";

export function useNews() {
  const { news, isLoading, selectedNewsId, selectNews, setLoading, setNews } = useNewsStore();

  const handleNewsPress = useCallback(
    (id: string) => {
      selectNews(selectedNewsId === id ? null : id);
    },
    [selectedNewsId, selectNews]
  );

  const refreshNews = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setLoading]);

  return {
    news,
    isLoading,
    selectedNewsId,
    handleNewsPress,
    refreshNews,
  };
}
