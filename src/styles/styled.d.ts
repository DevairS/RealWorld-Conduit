import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      backgroundHover?: string;
      text: string;
      textLight: string;
      textWhite?: string;
    };
  }
}
