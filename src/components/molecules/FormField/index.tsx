import React from 'react';
import { Box, FormControl, FormLabel, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface FormFieldProps {
  /**
   * The label for the form field
   */
  label?: string;
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Helper text to display below the field
   */
  helperText?: string;
  /**
   * Whether the field has an error
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * The form input component to render
   */
  children: React.ReactNode;
  /**
   * Additional spacing around the field
   */
  spacing?: number;
  /**
   * Whether to take full width
   */
  fullWidth?: boolean;
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiFormLabel-root': {
    marginBottom: theme.spacing(1),
    fontWeight: 500,
    color: theme.palette.text.primary,
    '&.Mui-required': {
      '&::after': {
        content: '" *"',
        color: theme.palette.error.main,
      },
    },
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

/**
 * FormField molecule that wraps form inputs with consistent styling and labeling
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  helperText,
  error = false,
  errorMessage,
  children,
  spacing = 2,
  fullWidth = true,
}) => {
  const displayHelperText = error && errorMessage ? errorMessage : helperText;

  return (
    <StyledFormControl 
      fullWidth={fullWidth} 
      error={error}
      required={required}
      sx={{ mb: spacing }}
    >
      <StyledBox>
        {label && (
          <FormLabel component="legend" required={required}>
            {label}
          </FormLabel>
        )}
        {children}
        {displayHelperText && (
          <FormHelperText error={error}>
            {displayHelperText}
          </FormHelperText>
        )}
      </StyledBox>
    </StyledFormControl>
  );
};

export default FormField;