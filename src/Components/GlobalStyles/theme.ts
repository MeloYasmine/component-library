import { createTheme } from "@mui/material/styles";
import { Secondary } from "../../stories/Button.stories";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0081A7',
    },
    secondary: {
      main: '#bd6b73',
    },
    text: {
      primary: '#F9F1F1',
      secondary: '#F9F1F1',
    },
    success: {
      main: '#0aae59',
      contrastText: '#F9F1F1',      
    },
    error: {
      main: '#ff0a3b',
      contrastText: '#F9F1F1',
    },
    warning: {
      main: '#BFCE12',
      contrastText: '#F9F1F1',
    },
    info:{
      main: '#5E79FD',
      contrastText: '#F9F1F1',
    }
  },
});

export default theme;

