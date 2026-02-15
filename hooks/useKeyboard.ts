import { useState, useEffect } from "react";
import { Keyboard } from "react-native";

export function useKeyboard() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    });

    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return { keyboardHeight };
}
