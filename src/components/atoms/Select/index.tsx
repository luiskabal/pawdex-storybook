import React from 'react';
import { 
  InputLabel, 
  Select as MuiSelect, 
  MenuItem, 
  FormHelperText,
  SelectProps as MuiSelectProps 
} from '@mui/material';
import { StyledFormControl, StyledSelectMenu } from './styles';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<MuiSelectProps, 'variant'> {
  /**
   * The variant of the select field
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * The label for the select field
   */
  label?: string;
  /**
   * Helper text to display below the select
   */
  helperText?: string;
  /**
   * Whether the field has an error
   */
  error?: boolean;
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Options for the select dropdown
   */
  options: SelectOption[];
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
}



/**
 * Select component for dropdown selections
 */
const Select: React.FC<SelectProps> = ({ 
  variant = 'outlined',
  label,
  helperText,
  error = false,
  required = false,
  options,
  placeholder,
  fullWidth = true,
  ...props 
}) => {
  return (
    <StyledFormControl 
      variant={variant} 
      fullWidth={fullWidth} 
      error={error}
      required={required}
    >
      {label && (
        <InputLabel id={`select-label-${label}`}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        labelId={`select-label-${label}`}
        label={label}
        displayEmpty={!!placeholder}
        MenuProps={StyledSelectMenu}
        {...props}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem 
            key={option.value} 
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </StyledFormControl>
  );
};

export default Select;