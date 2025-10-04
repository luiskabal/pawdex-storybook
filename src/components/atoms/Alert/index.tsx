import React from 'react';
import { AlertProps as MuiAlertProps } from '@mui/material';
import { StyledAlert } from './styles';

export interface AlertProps extends Omit<MuiAlertProps, 'severity'> {
  /**
   * The severity of the alert
   */
  severity?: 'success' | 'info' | 'warning' | 'error';
  /**
   * The content of the alert
   */
  children: React.ReactNode;
  /**
   * Whether to show the close button
   */
  onClose?: () => void;
}

/**
 * Alert component based on Material UI Alert with pet-themed styling
 */
const Alert: React.FC<AlertProps> = ({ 
  severity = 'info', 
  children, 
  onClose,
  ...props 
}) => {
  return (
    <StyledAlert
      severity={severity}
      onClose={onClose}
      {...props}
    >
      {children}
    </StyledAlert>
  );
};

export default Alert;