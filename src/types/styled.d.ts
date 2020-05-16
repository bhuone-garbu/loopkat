// import original module declaration
import 'styled-components';
import theme from '../styles/theme'

export type Theme = {
  breakpoints: any;
  colors: any;
  fields: any;
};

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
