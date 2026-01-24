# Agent Guidelines for Diplomacy Legal AI

This document provides coding agents with essential information about build commands, code style, and development practices for this React Native (Expo) project.

## Build, Lint & Test Commands

### Development
```bash
npm start                    # Start Expo development server
npm run android              # Start with Android emulator
npm run ios                  # Start with iOS simulator
npm run web                  # Start web version
```

### Linting
```bash
npm run lint                 # Run ESLint on the codebase
```

### Project Reset
```bash
npm run reset-project        # Reset to starter template
```

### Note on Testing
- Currently no test framework is configured
- To add tests, consider: `npm install --save-dev jest @testing-library/react-native`
- To run a single test file (once configured): `npm test -- path/to/test.spec.ts`

## Project Structure

This project uses Expo's **flat structure** (no `src/` folder):

```
root/
├── app/                    # Expo Router screens (file-based routing)
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components (button, checkbox, avatar)
│   ├── shared/            # Shared app-specific components
│   └── widgets/           # Complex feature components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions (e.g., cn helper)
├── stores/                 # Zustand state management
├── constants/              # App constants, theme, colors
├── types/                  # TypeScript type definitions
├── assets/                 # Images, fonts, icons
├── config/                 # Environment configuration
└── services/              # API clients and external services
```

## Code Style Guidelines

### 1. TypeScript
- **Strict mode enabled**: All code must pass strict TypeScript checks
- **Type definitions**: Define interfaces/types inline or in `types/` for reusable types
- **Type placement**: Define interfaces after implementation, at bottom of file
- **No implicit any**: Always provide explicit types

Example:
```typescript
// Good
const handlePress = (id: string): void => { ... }

interface LegalAssistantState {
  selectedAssistantId: string | null;
  setSelectedAssistant: (id: string) => void;
}
```

### 2. Imports
- **Path alias**: Use `@/` for absolute imports from root (configured in tsconfig.json)
- **Import order**: External packages → React/React Native → Local imports
- **Auto-organize**: VSCode settings enable auto-organize imports on save

Example:
```typescript
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Pressable, View } from "react-native";
```

### 3. Component Conventions

#### File Structure
- **Named exports** for utilities/stores: `export function cn(...)`
- **Default exports** for screens: `export default function Chat() { ... }`
- **Named exports with forwardRef** for UI components: `export { Button }`

#### Component Pattern
```typescript
// UI Components with variants (using class-variance-authority)
export const buttonVariants = cva(
  "flex-row items-center justify-center rounded-lg",
  {
    variants: { ... },
    defaultVariants: { ... }
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  // ... other props
}

const Button = React.forwardRef<View, ButtonProps>(({ ... }, ref) => {
  return <Pressable ... />
});

Button.displayName = "Button";
export { Button };
```

### 4. Styling
- **TailwindCSS (NativeWind)**: Primary styling method using `className`
- **No inline styles**: Use Tailwind classes, not `style={{}}` objects (except for dynamic styles)
- **cn() utility**: Use for conditional classes: `cn(buttonVariants({ variant, size }), className)`
- **Color system**: Use design tokens from `tailwind.config.js`:
  - Primary: `#f8f605` (yellow), Foreground: `#130800`
  - Secondary: `#2c475a` (blue), Foreground: `#cfd7dd`
  - Background: `#121214`

Example:
```typescript
<View className="flex flex-row items-center justify-between px-4 h-16">
  <Text className="text-secondary-foreground text-lg font-bold uppercase">
    Diplomacy
  </Text>
</View>
```

### 5. State Management
- **Local state**: `React.useState` for component-level state
- **Global state**: Zustand stores in `stores/` directory
- **Persistent storage**: `@react-native-async-storage/async-storage` for persistence

Zustand pattern:
```typescript
import { create } from "zustand";

export const useMyStore = create<MyState>((set) => ({
  value: null,
  setValue: (val: string) => set(() => ({ value: val })),
}));

interface MyState {
  value: string | null;
  setValue: (val: string) => void;
}
```

### 6. Routing (Expo Router)
- **File-based routing**: Files in `app/` directory become routes
- **Drawer navigation**: Main navigation in `app/(drawer)/`
- **Navigation**: Use `useRouter()` from `expo-router`
- **Replace vs Push**: Use `.replace()` to prevent back navigation

Example:
```typescript
import { useRouter } from "expo-router";

const router = useRouter();
router.replace("/(drawer)/chat");
```

### 7. Naming Conventions
- **Files**: PascalCase for components (`CustomHeader.tsx`), camelCase for utilities (`utils.ts`)
- **Components**: PascalCase (`LegalAssistantSelector`)
- **Hooks**: camelCase with `use` prefix (`useActive`)
- **Stores**: camelCase with `use` prefix and `Store` suffix (`useLegalAssistantStore`)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Variables/Functions**: camelCase

### 8. Error Handling
- Use try-catch blocks for async operations
- Log errors with `console.error()`
- Provide user feedback for errors (not just silent fails)

Example:
```typescript
try {
  const viewed = await AsyncStorage.getItem("hasViewedOnboarding");
  // ... logic
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}
```

### 9. Comments
- Avoid obvious comments
- Use comments for complex logic or business rules
- Spanish comments are acceptable (team convention)
- Document component props with JSDoc if complex

## Git Workflow

This project follows **Gitflow**:

- `main`: Production-ready code (App Store/Play Store)
- `develop`: Integration branch for new features
- `feature/*`: New features branch from `develop`
- `hotfix/*`: Urgent fixes branch from `main`

### Commit Message Format
Use conventional commits with prefixes:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `refactor:` for code refactoring
- `style:` for formatting changes
- `chore:` for maintenance tasks

Example: `feat: add Google login validation`

### Pull Requests
- At least one team member must review and approve
- Test on both Android and iOS before opening PR
- Keep PRs small and focused

## Important Notes

- **No force push** on `main` or `develop`
- **Never commit**: `node_modules/`, `ios/build/`, `android/app/build/`, `.env`
- After adding native dependencies: run `cd ios && pod install && cd ..` (iOS only)
- Ensure teammates run `npm install` after pulling package.json changes
