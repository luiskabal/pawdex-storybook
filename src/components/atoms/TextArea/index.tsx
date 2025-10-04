import React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { StyledTextField } from './styles';

export interface TextAreaProps extends Omit<MuiTextFieldProps, 'variant' | 'multiline'> {
  /**
   * The variant of the text area
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * The label for the text area
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
  /**
   * Number of rows to display
   */
  rows?: number;
  /**
   * Maximum number of rows to display before scrolling
   */
  maxRows?: number;
  /**
   * Minimum number of rows to display
   */
  minRows?: number;
}

/**
 * TextArea component for multi-line text input
 */
const TextArea: React.FC<TextAreaProps> = ({ 
  variant = 'outlined',
  label,
  placeholder,
  helperText,
  error = false,
  required = false,
  rows = 4,
  maxRows,
  minRows,
  fullWidth = true,
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
      multiline
      rows={rows}
      maxRows={maxRows}
      minRows={minRows}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default TextArea;