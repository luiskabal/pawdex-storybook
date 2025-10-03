import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'disabled';
  /**
   * The content of the button
   */
  children: React.ReactNode;
}

const StyledButton = styled(MuiButton)<{ customVariant?: string }>(({ theme, customVariant }) => ({
  ...(customVariant === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(customVariant === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
  ...(customVariant === 'disabled' && {
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.action.disabled,
    cursor: 'not-allowed',
    '&:hover': {
      backgroundColor: theme.palette.action.disabled,
    },
  }),
}));

/**
 * Button component based on Material UI Button with custom variants
 */
const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  disabled,
  ...props 
}) => {
  const isDisabled = disabled || variant === 'disabled';
  
  return (
    <StyledButton
      customVariant={variant}
      disabled={isDisabled}
      variant="contained"
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;