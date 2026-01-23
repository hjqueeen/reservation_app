# GastroSoftware Theme

A Material-UI (MUI) theme based on the color palette used in the GastroSoftware mobile application.

## Overview

This theme provides a consistent color scheme for the web application, matching the design system used in the GastroSoftware Android app. It includes both light and dark mode variants.

## Color Palette

### Light Mode
- **Primary**: `#FF8C00` (Orange) - Used for primary actions, buttons, and links
- **Secondary**: `#FF6B35` - Used for secondary actions
- **Tertiary**: `#E85D04` - Third tier color
- **Background**: `#f5f5f5` (default), `#FFFFFF` (paper)
- **Text**: `#000000` (primary), `rgba(0, 0, 0, 0.6)` (secondary)

### Dark Mode
- **Primary**: `#BB86FC` (Purple) - Used for primary actions
- **Secondary**: `#03DAC6` (Teal) - Used for secondary actions
- **Tertiary**: `#03DAC6` (Teal)
- **Background**: `#121212` (default), `#1E1E1E` (paper)
- **Text**: `#FFFFFF` (primary), `rgba(255, 255, 255, 0.7)` (secondary)

## Usage

### Basic Setup

The theme is already configured in `ClientWrapper.tsx`. To use it in your components:

```tsx
import { useTheme } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Button variant="contained" color="primary">
      Primary Button
    </Button>
  );
}
```

### Using Theme Colors Directly

```tsx
import { theme } from '@/app/theme/theme';
import { Box } from '@mui/material';

function MyComponent() {
  return (
    <Box sx={{ 
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: 2
    }}>
      Styled Box
    </Box>
  );
}
```

### Using Dark Theme

To use the dark theme variant:

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@/app/theme/theme';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Theme Switching (Dynamic)

To implement theme switching between light and dark modes:

```tsx
'use client';

import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme } from '@/app/theme/theme';
import { Button } from '@mui/material';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme
      </Button>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Available Theme Properties

### Palette Colors

```tsx
theme.palette.primary.main      // Main primary color
theme.palette.primary.light     // Light variant
theme.palette.primary.dark      // Dark variant
theme.palette.secondary.main    // Main secondary color
theme.palette.secondary.light   // Light variant
theme.palette.secondary.dark    // Dark variant
theme.palette.tertiary.main     // Tertiary color
theme.palette.background.default // Default background
theme.palette.background.paper  // Paper/card background
theme.palette.text.primary      // Primary text color
theme.palette.text.secondary    // Secondary text color
```

### Typography

The theme includes predefined typography settings:

```tsx
theme.typography.h1  // 2.5rem, fontWeight: 600
theme.typography.h2  // 2rem, fontWeight: 600
theme.typography.h3  // 1.75rem, fontWeight: 600
```

### Shape

```tsx
theme.shape.borderRadius  // 8px
```

## Examples

### Buttons

```tsx
import { Button, ButtonGroup } from '@mui/material';

<Button variant="contained" color="primary">
  Primary Button
</Button>

<Button variant="outlined" color="secondary">
  Secondary Button
</Button>

<Button variant="text" color="primary">
  Text Button
</Button>
```

### Cards

```tsx
import { Card, CardContent, Typography } from '@mui/material';

<Card>
  <CardContent>
    <Typography variant="h5">Card Title</Typography>
    <Typography variant="body2" color="text.secondary">
      Card content
    </Typography>
  </CardContent>
</Card>
```

### Custom Styling with Theme

```tsx
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function CustomComponent() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
    >
      Custom Styled Component
    </Box>
  );
}
```

## Customization

To customize the theme, edit `app/theme/theme.ts`:

```typescript
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8C00', // Change primary color
      // ... other variants
    },
    // ... other palette options
  },
  // ... other theme options
});
```

## Theme Preview

Visit `/theme` route to see all available colors and their values in the application.

## Source

The color palette is extracted from the GastroSoftware Android app's theme configuration:
- Light mode colors from `Theme.kt` (LightColorScheme)
- Dark mode colors from `Theme.kt` (DarkColorScheme)

## Related Files

- `app/theme/theme.ts` - Theme configuration
- `app/theme/page.tsx` - Theme preview page
- `app/components/ClientWrapper.tsx` - Theme provider setup
