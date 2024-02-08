
import { Alert, styled } from '@mui/material';
import theme from '../GlobalStyles/theme';

export const StyledAlert = styled(Alert)`
  &.MuiAlert-standardSuccess {
    background-color: ${theme.palette.success.main};
    color: ${theme.palette.success.contrastText};
  }
  
  &.MuiAlert-standardError {
    background-color: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText};
  }

  &.MuiAlert-standardWarning {
    background-color: ${theme.palette.warning.main};
    color: ${theme.palette.warning.contrastText};
  }

  &.MuiAlert-standardInfo {
    background-color: ${theme.palette.info.main};
    color: ${theme.palette.info.contrastText};
  }
`;
