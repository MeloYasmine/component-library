import {  Avatar, styled } from "@mui/material";
import theme from '../GlobalStyles/theme';

export const StyledAvatar = styled(Avatar)`

    &.MuiAvatar-root {
        background: ${theme.palette.primary.main};        
        color: ${theme.palette.text.primary};
    }
`;