import * as React from 'react';
import { forwardRef } from 'react';
import { AlertProps as MuiAlertProps, AlertColor } from '@mui/material';
import { StyledAlert } from './styles';

export interface AlertProps extends Omit<MuiAlertProps, 'color'> {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  icon?: React.ReactNode;
  severity?: 'success' | 'error' | 'warning' | 'info';
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { children, color, icon, severity, ...rest } = props;

  return (
    <StyledAlert ref={ref} {...rest} severity={severity || (color as AlertColor)} sx={{ width: '200px' }}>
        
      {icon && icon}
      {children}
    </StyledAlert>
  );
});

export { Alert };
