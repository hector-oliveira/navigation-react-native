import 'styled-components';
import THEME from './index';

declare module 'styled-components' {
  type ThemeType = typeof THEME;

  export interface DefaultTheme extends ThemeType {}
}