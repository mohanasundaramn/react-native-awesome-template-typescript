import {
  DarkTheme as NavDarkTheme,
  DefaultTheme as NavLightTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
} from 'react-native-paper';
import {Colors} from './colors';

// Light Theme
export const AppLightTheme = {
  ...PaperLightTheme,
  ...NavLightTheme,
  colors: {
    ...PaperLightTheme.colors,
    ...NavLightTheme.colors,
    primary: Colors.light.primary,
    accent: Colors.light.primaryAccent,
  },
};

// Dark Theme
export const AppDarkTheme = {
  ...PaperDarkTheme,
  ...NavDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavDarkTheme.colors,
  },
};
