import * as React from 'react';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { MouseEventHandler, forwardRef } from 'react';

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  color?: 'primary' | 'secondary' | 'inherit' | 'textPrimary' | 'textSecondary';
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  underline?: 'none' | 'hover' | 'always';
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, href, color, onClick, underline } = props;

  return (
    <MuiLink
      href={href}
      color={color}
      onClick={onClick}
      underline={underline}
      ref={ref}
    >
      {children}
    </MuiLink>
  );
});

export { Link };
