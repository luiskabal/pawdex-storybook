import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface DatePickerProps extends Omit<MuiTextFieldProps, 'variant' | 'type'> {
  /**
   * The variant of the date picker
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * The label for the date picker
   */
  label?: string;
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
   * The type of date input
   */
  dateType?: 'date' | 'datetime-local' | 'time';
  /**
   * Minimum date value
   */
  min?: string;
  /**
   * Maximum date value
   */
  max?: string;
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
  '& input[type="date"]::-webkit-calendar-picker-indicator': {
    cursor: 'pointer',
  },
}));

/**
 * DatePicker component for date selection
 */
const DatePicker: React.FC<DatePickerProps> = ({ 
  variant = 'outlined',
  label,
  helperText,
  error = false,
  required = false,
  dateType = 'date',
  min,
  max,
  fullWidth = true,
  ...props 
}) => {
  return (
    <StyledTextField
      variant={variant}
      label={label}
      helperText={helperText}
      error={error}
      required={required}
      type={dateType}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min,
        max,
      }}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default DatePicker;