import * as React from "react";
import { TextInput, View, StyleProp, ViewStyle } from "react-native";
import { Button } from "@/components/ui/button";
import { Checkbox, CheckboxLabel } from "@/components/ui/checkbox";
import { Ionicons } from "@expo/vector-icons";

export interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSendMessage: () => void;
  isWebEnabled: boolean;
  onWebEnabledChange: (enabled: boolean) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export function ChatInput({
  value,
  onChangeText,
  onSendMessage,
  isWebEnabled,
  onWebEnabledChange,
  containerStyle,
}: ChatInputProps) {
  return (
    <View
      style={containerStyle}
      className="flex flex-row flex-wrap w-11/12 bg-foreground mx-auto rounded-3xl p-2"
    >
      <TextInput
        className="flex-1 text-secondary-foreground"
        placeholderClassName="text-secondary-foreground"
        placeholderTextColor="#cfd7dd"
        placeholder="Ask a legal question..."
        multiline
        textAlignVertical="top"
        value={value}
        onChangeText={onChangeText}
      />
      <Button className="w-14 rounded-full" onPress={onSendMessage}>
        <Ionicons name="send-sharp" size={15}></Ionicons>
      </Button>

      <View className="flex flex-row items-center w-full mt-2">
        <Checkbox
          checked={isWebEnabled}
          onCheckedChange={onWebEnabledChange}
          id="feature-toggle"
        />
        <CheckboxLabel className="text-secondary-foreground">Web</CheckboxLabel>
      </View>
    </View>
  );
}
