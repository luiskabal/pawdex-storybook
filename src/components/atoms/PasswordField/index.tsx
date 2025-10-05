import React, { useState } from 'react';
import { TextFieldProps as MuiTextFieldProps, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { StyledTextField } from './styles';

export interface PasswordFieldProps extends Omit<MuiTextFieldProps, 'variant' | 'type'> {
  /**
   * The variant of the password field
   */
  variant?: 'outlined' | 'filled' | 'standard';
  /**
   * The label for the password field
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
   * Whether to show the password toggle button
   */
  showToggle?: boolean;
}

/**
 * PasswordField component with show/hide password functionality
 */
const PasswordField: React.FC<PasswordFieldProps> = ({ 
  variant = 'outlined',
  label = 'Password',
  placeholder,
  helperText,
  error = false,
  required = false,
  showToggle = true,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledTextField
      variant={variant}
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      required={required}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: showToggle ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleTogglePassword}
              edge="end"
              size="small"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : undefined,
      }}
      {...props}
    />
  );
};

export default PasswordField;