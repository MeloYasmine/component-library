/* eslint-disable */
import React from 'react';
import { StyledEngineProvider, ThemeProvider as ThemeProviderMaterial } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import theme from './theme';


interface Props {
  children: JSX.Element[] | JSX.Element
}

const ThemeProvider: React.FC<Props> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProviderMaterial theme={theme}>
      <ThemeProviderEmotion theme={theme}>
        {children}
      </ThemeProviderEmotion>
    </ThemeProviderMaterial>
  </StyledEngineProvider>
);

export { ThemeProvider };