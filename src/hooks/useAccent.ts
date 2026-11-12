import { useTheme } from 'styled-components';

/** Picks the brand color that stays readable on the current theme's background. */
const useAccent = (color: string, darkColor?: string): string => {
  const theme = useTheme();
  return theme.isDark && darkColor ? darkColor : color;
};

export default useAccent;
