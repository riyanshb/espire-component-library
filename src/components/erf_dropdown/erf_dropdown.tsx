import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface DropdownProps {
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (value: string | number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    onChange(event.target.value as string | number);
  };

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select' }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
