import theme from './src/styles/theme';

declare module 'styled-components' {
  export type DefaultTheme = typeof theme;
}
