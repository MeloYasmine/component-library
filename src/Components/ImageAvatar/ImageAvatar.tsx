import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export interface ImageAvatarProps {
    variant?: 'rounded' | 'square' | 'circular' | undefined;
    alt?: string | undefined;
    src?: string | undefined;
}

const ImageAvatar = ((props: ImageAvatarProps): JSX.Element => {

    const {
        variant,
        alt,
        src,
    } = props;

  return (
    <Stack direction="row" spacing={2}>
      <Avatar variant={variant} alt={alt} src={src} />
    </Stack>
  );
});

export { ImageAvatar };
