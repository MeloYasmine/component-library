/* eslint-disable */
// import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette';
// import { Shadows } from '@material-ui/core/styles/shadows';
import { Theme as MaterialTheme } from '@mui/material'
import 'styled-components';

declare module '@material-ui/core/styles/createPalette' {

  interface Palette {
    cpBackgrounds: Palette['primary'];
    processing: Palette['primary'];
    approval: Palette['primary'];
    actionNeeded: Palette['primary'];
    accentColors: AccentPaletteColor;
    textOn: TextColor;
  }
  
};

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}