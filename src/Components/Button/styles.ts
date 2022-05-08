import styled from '@emotion/styled';
import { Button } from '@mui/material';
import theme from '../GlobalStyles/theme';

export const StyledButton = styled(Button)`

    &.MuiButton-containedPrimary {
        background: ${theme.palette.primary.main};        
        color: ${theme.palette.text.primary};
    }

    &.MuiButton-containedSecondary {
        background: ${theme.palette.secondary.main};        
        color: ${theme.palette.text.primary};
    }

    &.MuiButton-containedSuccess{
        background: ${theme.palette.success.main};        
        color: ${theme.palette.success.contrastText};
    }

    &.MuiButton-containedWarning{
        background: ${theme.palette.warning.main};        
        color: ${theme.palette.warning.contrastText};
    }

    &.MuiButton-containedError{
        background: ${theme.palette.error.main};        
        color: ${theme.palette.error.contrastText};
    }

    &.MuiButton-containedInfo{
        background: ${theme.palette.info.main};        
        color: ${theme.palette.info.contrastText};
    }
`;
