import React from 'react';
import { 
  Checkbox as MuiCheckbox, 
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  FormControl,
  FormHelperText
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'size'> {
  /**
   * The label for the checkbox
   */
  label?: string;
  /**
   * Helper text to display below the checkbox
   */
  helperText?: string;
  /**
   * Whether the checkbox has an error
   */
  error?: boolean;
  /**
   * The size of the checkbox
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The color variant of the checkbox
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
}

const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'transparent',
    '& .MuiSvgIcon-root': {
      filter: 'brightness(1.1)',
    },
  },
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
  '& .MuiSvgIcon-root': {
    transition: theme.transitions.create(['color', 'filter']),
  },
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  '& .MuiFormControlLabel-label': {
    fontSize: '1rem',
    color: theme.palette.text.primary,
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },
}));

const StyledFormControl = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

/**
 * Checkbox component based on Material UI Checkbox with custom styling
 */
const Checkbox: React.FC<CheckboxProps> = ({ 
  label,
  helperText,
  error = false,
  size = 'medium',
  color = 'primary',
  disabled = false,
  ...props 
}) => {
  const checkboxElement = (
    <StyledCheckbox
      size={size}
      color={error ? 'error' : color}
      disabled={disabled}
      {...props}
    />
  );

  if (!label && !helperText) {
    return checkboxElement;
  }

  return (
    <StyledFormControl error={error} disabled={disabled}>
      {label ? (
        <StyledFormControlLabel
          control={checkboxElement}
          label={label}
          disabled={disabled}
        />
      ) : (
        checkboxElement
      )}
      {helperText && (
        <FormHelperText sx={{ ml: 0, mt: 0.5 }}>
          {helperText}
        </FormHelperText>
      )}
    </StyledFormControl>
  );
};

export default Checkbox;