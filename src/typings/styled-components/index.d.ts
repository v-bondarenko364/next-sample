import theme from 'theme/theme';

type ThemeInterface = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends Omit<ThemeInterface, 'breakpoints'> {}
}
