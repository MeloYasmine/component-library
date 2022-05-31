import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material';
import { forwardRef, ReactNode, useState } from 'react';
import { StyledFormControl, StyledSelect } from './styles';

export interface SelectProps {
    labelId?: string;
    id?: string | undefined;
    value: string | undefined;
    label: string;
    onChange?: Function;
    variant?: 'filled' | 'outlined' | 'standard'
  }

  
const Select = forwardRef((props: SelectProps): JSX.Element => {
      const {
        labelId,
        id,
        value,
        label,
        onChange,
        variant = 'outlined'

      } = props;

      const [thisValue, setThisValue] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>, child: ReactNode): void => {
    setThisValue(event.target.value as string);
    if (onChange) onChange(event.target.value);
  };

  return (
    <StyledFormControl variant="filled">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <StyledSelect
          labelId={labelId}
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
          variant={variant}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </StyledSelect>
    </StyledFormControl>
  );
});

export { Select };
