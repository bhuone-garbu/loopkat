// import original module declaration
import 'styled-components';

export type Theme = {
  breakpoints: any;
  colors: any;
  fields: any;
};

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
