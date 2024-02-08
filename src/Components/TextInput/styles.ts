import styled from '@emotion/styled';
import { Input } from '@mui/material';
import theme from '../GlobalStyles/theme';

export const StyledInput = styled(Input)`
  &.MuiInput-root {
    color: ${theme.palette.text.primary};
    background-color: ${theme.palette.background.default};
    border: 1px solid ${theme.palette.divider};
    border-radius: ${theme.shape.borderRadius}px;
    padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-color: ${theme.palette.primary.main};
    }

    &:focus {
      border-color: ${theme.palette.primary.main};
      box-shadow: 0 0 0 0.2rem ${theme.palette.primary.dark};
    }

    &.Mui-disabled {
      background-color: ${theme.palette.action.disabledBackground};
      color: ${theme.palette.action.disabled};
      border-color: ${theme.palette.action.disabled};
    }
  }
`;
