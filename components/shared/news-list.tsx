import * as React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { NewsCard } from "@/components/shared/news-card";
import type { NewsItem } from "@/types/news";

interface NewsListProps {
  news: NewsItem[];
  selectedNewsId: string | null;
  onNewsPress: (id: string) => void;
}

const renderNewsItem = ({ item }: { item: NewsItem }) => (
  <NewsCard news={item} className="mx-4" />
);

export function NewsList({ news, selectedNewsId, onNewsPress }: NewsListProps) {
  return (
    <View className="flex-1 bg-background">
      <FlashList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  );
}
