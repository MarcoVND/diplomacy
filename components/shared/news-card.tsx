import { cn } from "@/lib/utils";
import type { NewsItem } from "@/types/news";
import * as React from "react";
import { Pressable, Text, View } from "react-native";

interface NewsCardProps {
  news: NewsItem;
  onPress?: () => void;
  className?: string;
}

export function NewsCard({ news, onPress, className }: NewsCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "bg-secondary/80 backdrop-blur-md rounded-2xl overflow-hidden mb-4 border border-primary/30 shadow-lg shadow-primary/5",
        className
      )}
    >
      <View className="p-4">
        <View className="flex flex-row items-center justify-between mb-3">
          <View className="flex flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full bg-primary" />
            <Text className="text-xs text-primary uppercase font-bold tracking-widest">
              {news.source}
            </Text>
          </View>
          <Text className="text-xs text-secondary-foreground/60 font-medium">
            {news.publishedAt}
          </Text>
        </View>
        
        <Text className="text-lg font-bold text-secondary-foreground mb-2 leading-tight">
          {news.title}
        </Text>
        
        <Text className="text-sm text-secondary-foreground/80 leading-relaxed">
          {news.summary}
        </Text>
        
        <View className="flex flex-row items-center mt-3 gap-1">
          <Text className="text-xs text-primary font-semibold">Read more</Text>
          <Text className="text-xs text-primary">→</Text>
        </View>
      </View>
    </Pressable>
  );
}
