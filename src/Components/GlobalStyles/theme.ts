import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.COLOR_PRIMARY !== undefined ? process.env.COLOR_PRIMARY : '#0081A7',
    },
    secondary: {
      main: process.env.COLOR_SECONDARY !== undefined ? process.env.COLOR_SECONDARY : '#bd6b73',
    },
    text: {
      primary: process.env.TEXT_PRIMARY !== undefined ? process.env.TEXT_PRIMARY : '#F9F1F1',
      secondary: process.env.TEXT_SECONDARY !== undefined ? process.env.SECONDARY : '#F9F1F1',
    },
    success: {
      main: process.env.SUCCESS_MAIN !== undefined ? process.env.SUCCESS_MAIN : '#0aae59',
      contrastText: process.env.SUCCESS_CONTRAST_TEXT!== undefined ? process.env.SUCCESS_CONTRAST_TEXT : '#F9F1F1',     
    },
    error: {
      main: process.env.ERROR_MAIN !== undefined ? process.env.ERROR_MAIN : '#ff0a3b',
      contrastText: process.env.ERROR_CONTRAST_TEXT !== undefined ? process.env.ERROR_CONTRAST_TEXT : '#F9F1F1',
    },
    warning: {
      main: process.env.WARNING_MAIN !== undefined ? process.env.WARNING_MAIN : '#BFCE12',
      contrastText: process.env.WARNING_CONTRAST_TEXT !== undefined ? process.env.WARNING_CONTRAST_TEXT : '#F9F1F1',
    },
    info:{
      main: process.env.INFO_MAIN !== undefined ? process.env.INFO_MAIN : '#5E79FD',
      contrastText: process.env.INFO_CONTRAST_TEXT !== undefined ? process.env.INFO_CONTRAST_TEXT : '#F9F1F1',
    }
  },
});

export default theme;

