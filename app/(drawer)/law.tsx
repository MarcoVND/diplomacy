import { View, Pressable, Text, ScrollView } from "react-native";
import { useLaw } from "@/hooks/useLaw";

const LawScreen = () => {
  const {
    laws,
    selectedLaw,
    handleSelectLaw,
    currentLocation,
    isLocationEnabled,
  } = useLaw();

  const locationLabel = isLocationEnabled && currentLocation
    ? `${currentLocation.city}, ${currentLocation.country}`
    : "All Locations";

  return (
    <View className="flex-1 bg-background">
      {selectedLaw ? (
        <>
          <View className="bg-secondary/30 px-4 py-3 border-b border-primary/20">
            <Pressable
              onPress={() => handleSelectLaw(null)}
              className="flex flex-row items-center gap-2"
            >
              <Text className="text-primary font-bold">← Back</Text>
              <Text className="text-secondary-foreground/60">to list</Text>
            </Pressable>
          </View>
          <ScrollView className="flex-1 px-4 py-4">
            <View className="flex flex-row items-center gap-2 mb-2">
              <View className="w-2 h-2 rounded-full bg-primary" />
              <Text className="text-xs text-primary uppercase font-bold tracking-widest">
                {selectedLaw.country} • {selectedLaw.city}
              </Text>
            </View>

            <Text className="text-2xl font-bold text-secondary-foreground mb-2">
              {selectedLaw.name}
            </Text>

            <Text className="text-sm text-secondary-foreground/80 mb-6">
              {selectedLaw.description}
            </Text>

            <Text className="text-lg font-bold text-secondary-foreground mb-4">
              Articles
            </Text>

            {selectedLaw.articles.map((article) => (
              <View
                key={article.number}
                className="bg-secondary/50 rounded-xl p-4 mb-3 border border-primary/20"
              >
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
            ))}
          </ScrollView>
        </>
      ) : (
        <ScrollView className="flex-1 px-4 py-4">
          <View className="px-4 pt-4 pb-2">
            <Text className="text-xs text-secondary-foreground/60 uppercase tracking-wider">
              Showing laws for {locationLabel}
            </Text>
          </View>

          {laws.map((law) => (
            <Pressable
              key={law.id}
              onPress={() => handleSelectLaw(law)}
              className="bg-secondary/80 backdrop-blur-md rounded-2xl p-4 mb-3 border border-primary/30"
            >
              <View className="flex flex-row items-center justify-between mb-2">
                <View className="flex flex-row items-center gap-2">
                  <View className="w-2 h-2 rounded-full bg-primary" />
                  <Text className="text-xs text-primary uppercase font-bold tracking-widest">
                    {law.country}
                  </Text>
                </View>
                <Text className="text-xs text-secondary-foreground/60">
                  {law.city}
                </Text>
              </View>

              <Text className="text-lg font-bold text-secondary-foreground mb-1">
                {law.name}
              </Text>

              <Text
                className="text-sm text-secondary-foreground/80 mb-3"
                numberOfLines={2}
              >
                {law.description}
              </Text>

              <View className="flex flex-row items-center gap-2">
                <Text className="text-xs text-secondary-foreground/60">
                  {law.articles.length} articles
                </Text>
                <Text className="text-xs text-secondary-foreground/40">•</Text>
                <Text className="text-xs text-secondary-foreground/60">
                  Updated {law.lastUpdated}
                </Text>
              </View>
            </Pressable>
          ))}

          {laws.length === 0 && (
            <View className="flex-1 items-center justify-center px-4 py-20">
              <Text className="text-secondary-foreground/60 text-center">
                No laws found for this location
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default LawScreen;
