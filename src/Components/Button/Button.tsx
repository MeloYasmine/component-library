import * as React from 'react'
import {  forwardRef, MouseEventHandler }  from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  children: React.ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'contained' | 'text' | 'outlined';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef((props: ButtonProps): JSX.Element => {
  const{
    children,
    color,
    onClick,
    variant,
    disabled,
    size,
  } = props;
  
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      size={size}
      >
      {children}
    </StyledButton>
  );
});

export { Button };
Button.displayName = 'Button';