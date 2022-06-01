import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { StyledAvatar } from './styles';

export interface LetterAvatarProps {
    children: React.ReactNode;
    variant?: 'rounded' | 'square' | 'circular' | undefined;
}

const LetterAvatar = ((props: LetterAvatarProps): JSX.Element => {
    const {
      children,
    } = props;

  return (
    <Stack direction="row" spacing={2}>
      <StyledAvatar>{children}</StyledAvatar>
    </Stack>
  );
});

export { LetterAvatar };