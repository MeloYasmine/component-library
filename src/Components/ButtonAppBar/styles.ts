import { AppBar, styled } from "@mui/material";
import theme from '../GlobalStyles/theme';

export const StyledAppBar = styled(AppBar)`
    &.MuiAppBar-colorPrimary {
        background: ${theme.palette.primary.main};
        color: ${theme.palette.text.primary};
    }
    &.MuiAppBar-colorSecondary {
        background: ${theme.palette.secondary.main};
        color: ${theme.palette.text.secondary};
    }
`;