import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginTop: theme.spacing(0.5),
  },
  '& .MuiInputBase-input': {
    resize: 'vertical',
  },
}));

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