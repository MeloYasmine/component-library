import React from 'react';
import { StyledInput } from './styles'; 

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | undefined;
}

const TextInput = ((props: TextInputProps): JSX.Element => {
  const {
    value,
    onChange,
    disabled,
    size,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledInput
      type="text"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      size={size}
    />
  );
});

export { TextInput };
