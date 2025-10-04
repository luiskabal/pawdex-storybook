import React from 'react';
import { ThemeProvider } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StyledTextField, datePickerTheme } from './styles';

export interface DatePickerProps {
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
   * The current value of the date picker
   */
  value?: Date | null;
  /**
   * Callback fired when the value changes
   */
  onChange?: (date: Date | null) => void;
  /**
   * Minimum date value
   */
  minDate?: Date;
  /**
   * Maximum date value
   */
  maxDate?: Date;
  /**
   * Whether the field is disabled
   */
  disabled?: boolean;
  /**
   * Whether the field is read-only
   */
  readOnly?: boolean;
  /**
   * Whether to show the full width
   */
  fullWidth?: boolean;
  /**
   * Placeholder text
   */
  placeholder?: string;
}

/**
 * DatePicker component for date selection
 */
const DatePicker: React.FC<DatePickerProps> = ({ 
  variant = 'outlined',
  label,
  helperText,
  error = false,
  required = false,
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  readOnly = false,
  fullWidth = true,
  placeholder,
  ...props 
}) => {
  return (
    <ThemeProvider theme={datePickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDatePicker
          key={`datepicker-${label || 'default'}`}
          label={label}
          value={value}
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          disabled={disabled}
          readOnly={readOnly}
          enableAccessibleFieldDOMStructure={false}
          slots={{
            textField: StyledTextField,
          }}
          slotProps={{
            textField: {
              variant,
              helperText,
              error,
              required,
              fullWidth,
              placeholder,
              InputLabelProps: {
                shrink: true,
              },
              ...props,
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DatePicker;