import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.COLOR_PRIMARY !== undefined ? process.env.COLOR_PRIMARY : '#FFFFFF',
    },
    secondary: {
      main: process.env.COLOR_SECONDARY !== undefined ? process.env.COLOR_SECONDARY : '#734248',
    },
    text: {
      primary: process.env.TEXT_PRIMARY !== undefined ? process.env.TEXT_PRIMARY : '#000000',
      secondary: process.env.TEXT_SECONDARY !== undefined ? process.env.SECONDARY : '#F9F1F1',
    },
    success: {
      main: process.env.SUCCESS_MAIN !== undefined ? process.env.SUCCESS_MAIN : '#025F2E',
      contrastText: process.env.SUCCESS_CONTRAST_TEXT!== undefined ? process.env.SUCCESS_CONTRAST_TEXT : '#F9F1F1',     
    },
    error: {
      main: process.env.ERROR_MAIN !== undefined ? process.env.ERROR_MAIN : '#97031F',
      contrastText: process.env.ERROR_CONTRAST_TEXT !== undefined ? process.env.ERROR_CONTRAST_TEXT : '#F9F1F1',
    },
    warning: {
      main: process.env.WARNING_MAIN !== undefined ? process.env.WARNING_MAIN : '#DCED31',
      contrastText: process.env.WARNING_CONTRAST_TEXT !== undefined ? process.env.WARNING_CONTRAST_TEXT : '#000000',
    },
    info:{
      main: process.env.INFO_MAIN !== undefined ? process.env.INFO_MAIN : '#384AA1',
      contrastText: process.env.INFO_CONTRAST_TEXT !== undefined ? process.env.INFO_CONTRAST_TEXT : '#F9F1F1',
    },
  },
});

export default theme;

