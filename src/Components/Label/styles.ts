import styled from '@emotion/styled';

import theme from '../GlobalStyles/theme';

interface StyledLabelProps {
  color: string;
}

export const StyledLabel = styled.label<StyledLabelProps>`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;

  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `color: ${theme.palette.primary.main};`;
      case 'secondary':
        return `color: ${theme.palette.secondary.main};`;
      case 'success':
        return `color: ${theme.palette.success.main};`;
      case 'warning':
        return `color: ${theme.palette.warning.main};`;
      case 'error':
        return `color: ${theme.palette.error.main};`;
      case 'info':
        return `color: ${theme.palette.info.main};`;
      default:
        return '';
    }
  }}
`;
