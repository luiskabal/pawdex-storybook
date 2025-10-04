import React from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { StyledButton } from './styles';

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