import styled from '@emotion/styled';
import { Link } from '@mui/material';
import theme from '../GlobalStyles/theme';

export const StyledLink = styled(Link)`

&& {
    color: ${theme.palette.primary.main};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
        color: ${theme.palette.primary.dark};
    }

    &.MuiLink-underlineHover:hover {
        text-decoration: underline;
    }
}

`;
