import * as React from "react";
import { View, Text } from "react-native";
import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  isOwn: boolean;
  timestamp?: string;
  className?: string;
}

const ChatBubble = React.forwardRef<View, ChatBubbleProps>(
  ({ message, isOwn, timestamp, className }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 mb-2",
          isOwn
            ? "bg-primary rounded-tr-sm ml-auto"
            : "bg-secondary rounded-tl-sm mr-auto",
          className
        )}
      >
        <Text
          className={cn(
            "text-base",
            isOwn ? "text-primary-foreground" : "text-secondary-foreground"
          )}
        >
          {message}
        </Text>
        {timestamp && (
          <Text
            className={cn(
              "text-xs mt-1",
              isOwn
                ? "text-primary-foreground/70 text-right"
                : "text-secondary-foreground/70"
            )}
          >
            {timestamp}
          </Text>
        )}
      </View>
    );
  }
);

ChatBubble.displayName = "ChatBubble";

export { ChatBubble };
