import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { StyledTextField } from './styles';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'variant'> {
  /**
   * The variant of the text field
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * The label for the text field
   */
  label?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Helper text to display below the input
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
}

/**
 * TextField component based on Material UI TextField with custom styling
 */
const TextField: React.FC<TextFieldProps> = ({ 
  variant = 'outlined',
  label,
  placeholder,
  helperText,
  error = false,
  required = false,
  ...props 
}) => {
  return (
    <StyledTextField
      variant={variant}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      required={required}
      fullWidth
      {...props}
    />
  );
};

export default TextField;