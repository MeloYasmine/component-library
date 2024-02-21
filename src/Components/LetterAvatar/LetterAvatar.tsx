import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { StyledAvatar } from './styles';

export interface LetterAvatarProps {
    children: string; // Alterado para aceitar apenas texto como criança
    variant?: 'rounded' | 'square' | 'circular' | undefined;
    color?: string | undefined; // Nova prop para cor do texto
}

const LetterAvatar = ((props: LetterAvatarProps): JSX.Element => {
    const {
      children,
      color,
      variant,
    } = props;

  return (
    <Stack direction="row" spacing={2}>
      <StyledAvatar color={color} variant={variant}>
        {children}
      </StyledAvatar>
    </Stack>
  );
});

export { LetterAvatar };
