import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar } from './styles';
import { forwardRef } from 'react';

export interface AppBarProps {
  color: "primary" | "secondary" | "inherit" | "default" | "transparent" | undefined
}
const ButtonAppBar = forwardRef((props: AppBarProps): JSX.Element => {
  const{
    color,
  } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar 
      position="static" 
      color={color}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
});

export {ButtonAppBar};
