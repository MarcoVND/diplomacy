import * as React from "react";
import { ScrollView, Text, View } from "react-native";
import { cn } from "@/lib/utils";
import type { Law, LawArticle } from "@/types/law";

function ArticleItem({ article }: { article: LawArticle }) {
  return (
    <View className="bg-secondary/50 rounded-xl p-4 mb-3 border border-primary/20">
      <View className="flex flex-row items-start gap-3 mb-2">
        <View className="bg-primary/20 rounded-lg px-2 py-1">
          <Text className="text-xs font-bold text-primary">Art. {article.number}</Text>
        </View>
        <Text className="text-base font-bold text-secondary-foreground flex-1">
          {article.title}
        </Text>
      </View>
      <Text className="text-sm text-secondary-foreground/80 leading-relaxed">
        {article.content}
      </Text>
    </View>
  );
}

interface LawDetailProps {
  law: Law;
  onBack?: () => void;
  className?: string;
}

export function LawDetail({ law, onBack, className }: LawDetailProps) {
  return (
    <ScrollView
      className={cn("flex-1 bg-background px-4", className)}
      showsVerticalScrollIndicator={false}
    >
      <View className="py-4">
        <View className="flex flex-row items-center gap-2 mb-2">
          <View className="w-2 h-2 rounded-full bg-primary" />
          <Text className="text-xs text-primary uppercase font-bold tracking-widest">
            {law.country} • {law.city}
          </Text>
        </View>

        <Text className="text-2xl font-bold text-secondary-foreground mb-2">
          {law.name}
        </Text>

        <Text className="text-sm text-secondary-foreground/80 mb-6">
          {law.description}
        </Text>

        <Text className="text-lg font-bold text-secondary-foreground mb-4">
          Articles
        </Text>

        {law.articles.map((article) => (
          <ArticleItem key={article.number} article={article} />
        ))}
      </View>
    </ScrollView>
  );
}
