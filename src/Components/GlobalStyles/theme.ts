import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.COLOR_PRIMARY !== undefined ? process.env.COLOR_PRIMARY : '#151F30',
    },
    secondary: {
      main: process.env.COLOR_SECONDARY !== undefined ? process.env.COLOR_SECONDARY : '#103778',
    },
    text: {
      primary: process.env.TEXT_PRIMARY !== undefined ? process.env.TEXT_PRIMARY : '#fafafa',
      secondary: process.env.TEXT_SECONDARY !== undefined ? process.env.SECONDARY : '#fafafa',
    },
    success: {
      main: process.env.SUCCESS_MAIN !== undefined ? process.env.SUCCESS_MAIN : '#0593A2',
      contrastText: process.env.SUCCESS_CONTRAST_TEXT!== undefined ? process.env.SUCCESS_CONTRAST_TEXT : '#fafafa',     
    },
    error: {
      main: process.env.ERROR_MAIN !== undefined ? process.env.ERROR_MAIN : '#7F0000',
      contrastText: process.env.ERROR_CONTRAST_TEXT !== undefined ? process.env.ERROR_CONTRAST_TEXT : '#fafafa',
    },
    warning: {
      main: process.env.WARNING_MAIN !== undefined ? process.env.WARNING_MAIN : '#8F3B07',
      contrastText: process.env.WARNING_CONTRAST_TEXT !== undefined ? process.env.WARNING_CONTRAST_TEXT : '#fafafa',
    },
    info:{
      main: process.env.INFO_MAIN !== undefined ? process.env.INFO_MAIN : '#4971AD',
      contrastText: process.env.INFO_CONTRAST_TEXT !== undefined ? process.env.INFO_CONTRAST_TEXT : '#fafafa',
    },

  },
});

export default theme;

