import * as React from 'react';
import { StyledLabel } from './styles'; 

export interface LabelProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const Label = (props: LabelProps): JSX.Element => {
  const { children, color } = props;
  
  return (
    <StyledLabel color={color}>
      {children}
    </StyledLabel>
  );
};

export { Label };
