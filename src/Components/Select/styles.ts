import styled from '@emotion/styled';
import { FormControl, MenuItem, MenuProps, Select } from '@mui/material';


export const StyledFormControl = styled(FormControl)`
  .MuiFilledInput-underline {
    border-bottom: 2px solid #9EA7AA;
  }
  .MuiFilledInput-underline:after {
    border-bottom: unset;
  }
  .MuiFilledInput-underline:before {
    border-bottom: unset;
  }
`;

export const StyledSelect = styled(Select)`
  .MuiSelect-filled, .MuiSelect-select:focus {
    background-color: #343A3D;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .MuiSelect-icon {
    color: inherit;
    width: 20px;
    height: 20px;
    top: calc(50% - 9px)
  }

  .MuiFilledInput-input {
    padding-top: 11px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  min-height: 38px;
  
  &:hover {
    background-color: #343A3D;
  }

  &.Mui-selected, &.Mui-selected:hover{
    background-color: #121414;
  }
`;

export const Placeholder = styled(MenuItem)`
  display: none;
`;

export const StyledMenuProps: Partial<MenuProps> = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  PaperProps: {
    style: {
      backgroundColor: '#262628',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      marginTop: '2px',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
  },
  marginThreshold: 0,
};
