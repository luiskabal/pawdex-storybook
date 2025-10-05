import React from 'react';
import { ButtonProps as MuiButtonProps, CircularProgress } from '@mui/material';
import { StyledButton } from './styles';

export interface LoadingButtonProps extends Omit<MuiButtonProps, 'variant'> {
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'disabled';
  /**
   * The content of the button
   */
  children: React.ReactNode;
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  /**
   * Custom loading text to display when loading
   */
  loadingText?: string;
  /**
   * Size of the loading spinner
   */
  loadingSize?: number;
}

/**
 * LoadingButton component with loading state functionality
 */
const LoadingButton: React.FC<LoadingButtonProps> = ({ 
  variant = 'primary', 
  children, 
  disabled,
  loading = false,
  loadingText,
  loadingSize = 20,
  ...props 
}) => {
  const isDisabled = disabled || variant === 'disabled' || loading;
  
  return (
    <StyledButton
      customVariant={variant}
      disabled={isDisabled}
      variant="contained"
      startIcon={loading ? <CircularProgress size={loadingSize} color="inherit" /> : undefined}
      {...props}
    >
      {loading && loadingText ? loadingText : children}
    </StyledButton>
  );
};

export default LoadingButton;