import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      primaryHover: string;

      tertiary?: string;

      background: string;
      backgroundHover: string;
      text: string;
      textReverse: string;
      textHover?: string;
    };
  }
}
