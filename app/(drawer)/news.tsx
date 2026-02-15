import { useNews } from "@/hooks/useNews";
import { NewsList } from "@/components/shared/news-list";

const News = () => {
  const { news, selectedNewsId, handleNewsPress } = useNews();

  return (
    <NewsList
      news={news}
      selectedNewsId={selectedNewsId}
      onNewsPress={handleNewsPress}
    />
  );
};

export default News;
