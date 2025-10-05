import React, { useState } from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import TextField from '../../atoms/TextField';
import LoadingButton from '../../atoms/LoadingButton';
import { StyledForm, StyledFormContainer } from './styles';

export interface ForgotPasswordFormData {
  email: string;
}

export interface ForgotPasswordFormProps {
  /**
   * Callback function when form is submitted
   */
  onSubmit?: (data: ForgotPasswordFormData) => void | Promise<void>;
  /**
   * Whether the form is in loading state
   */
  loading?: boolean;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Success message to display
   */
  success?: string;
  /**
   * Callback for back to sign in link
   */
  onBackToSignIn?: () => void;
  /**
   * Whether to show the back to sign in link
   */
  showBackToSignInLink?: boolean;
  /**
   * Custom container styling props
   */
  containerSx?: object;
  /**
   * Custom header styling props
   */
  headerSx?: object;
  /**
   * Custom form styling props
   */
  formSx?: object;
  /**
   * Custom alert styling props
   */
  alertSx?: object;
  /**
   * Custom back link styling props
   */
  backLinkSx?: object;
}

/**
 * ForgotPasswordForm component for password recovery
 */
const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  loading = false,
  error,
  success,
  onBackToSignIn,
  showBackToSignInLink = true,
  containerSx,
  headerSx,
  formSx,
  alertSx,
  backLinkSx,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error
    setEmailError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (onSubmit) {
      await onSubmit({ email });
    }
  };

  return (
    <StyledFormContainer sx={containerSx}>
      <Box sx={{ textAlign: 'center', mb: 3, ...headerSx }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reset Password
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Enter your email address and we&apos;ll send you a link to reset your password
        </Typography>
      </Box>

      {error && (
        <Box sx={{ mb: 2, p: 2, bgcolor: 'error.light', borderRadius: 1, ...alertSx }}>
          <Typography variant="body2" color="error.main">
            {error}
          </Typography>
        </Box>
      )}

      {success && (
        <Box sx={{ mb: 2, p: 2, bgcolor: 'success.light', borderRadius: 1, ...alertSx }}>
          <Typography variant="body2" color="success.main">
            {success}
          </Typography>
        </Box>
      )}

      <StyledForm onSubmit={handleSubmit} sx={formSx}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
          required
          fullWidth
          autoComplete="email"
          placeholder="Enter your email address"
          autoFocus
        />

        <LoadingButton
          type="submit"
          variant="primary"
          loading={loading}
          loadingText="Sending reset link..."
          fullWidth
          size="large"
        >
          Send Reset Link
        </LoadingButton>

        {showBackToSignInLink && (
          <>
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                or
              </Typography>
            </Divider>

            <Box sx={{ textAlign: 'center', ...backLinkSx }}>
              <Typography variant="body2" color="text.secondary">
                Remember your password?{' '}
                <Link
                  component="button"
                  type="button"
                  onClick={onBackToSignIn}
                  sx={{ textDecoration: 'none', fontWeight: 600 }}
                >
                  Back to Sign In
                </Link>
              </Typography>
            </Box>
          </>
        )}
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ForgotPasswordForm;