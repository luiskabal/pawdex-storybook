import React, { useState } from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import TextField from '../../atoms/TextField';
import PasswordField from '../../atoms/PasswordField';
import LoadingButton from '../../atoms/LoadingButton';
import { StyledForm, StyledFormContainer } from './styles';

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormProps {
  /**
   * Callback function when form is submitted
   */
  onSubmit?: (data: LoginFormData) => void | Promise<void>;
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
   * Callback for forgot password link
   */
  onForgotPassword?: () => void;
  /**
   * Callback for sign up link
   */
  onSignUp?: () => void;
  /**
   * Whether to show the sign up link
   */
  showSignUpLink?: boolean;
  /**
   * Whether to show the forgot password link
   */
  showForgotPasswordLink?: boolean;
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
   * Whether to show demo credentials section
   */
  showDemoCredentials?: boolean;
  /**
   * Demo credentials data
   */
  demoCredentials?: Array<{
    role: string;
    email: string;
    password: string;
  }>;
  /**
   * Callback when demo credentials are used
   */
  onDemoCredentialsClick?: (email: string, password: string) => void;
}

/**
 * LoginForm component with email and password fields
 */
const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
  error,
  success,
  onForgotPassword,
  onSignUp,
  showSignUpLink = true,
  showForgotPasswordLink = true,
  containerSx,
  headerSx,
  formSx,
  alertSx,
  showDemoCredentials = false,
  demoCredentials = [],
  onDemoCredentialsClick,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validate fields
    let hasErrors = false;
    
    if (!email) {
      setEmailError('Email is required');
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasErrors = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasErrors = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasErrors = true;
    }

    if (hasErrors) return;

    if (onSubmit) {
      await onSubmit({ email, password });
    }
  };

  return (
    <StyledFormContainer sx={containerSx}>
      <Box sx={{ textAlign: 'center', mb: 3, ...headerSx }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sign in to your PawDex account
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
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          helperText={emailError}
          required
          fullWidth
          autoComplete="email"
          placeholder="Enter your email"
        />

        <PasswordField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
          required
          fullWidth
          autoComplete="current-password"
          placeholder="Enter your password"
        />

        {showForgotPasswordLink && (
          <Box sx={{ textAlign: 'right', mb: 2 }}>
            <Link
              component="button"
              type="button"
              variant="body2"
              onClick={onForgotPassword}
              sx={{ textDecoration: 'none' }}
            >
              Forgot password?
            </Link>
          </Box>
        )}

        <LoadingButton
          type="submit"
          variant="primary"
          loading={loading}
          loadingText="Signing in..."
          fullWidth
          size="large"
        >
          Sign In
        </LoadingButton>

        {showDemoCredentials && demoCredentials.length > 0 && (
          <>
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Demo Accounts
              </Typography>
            </Divider>

            <Box sx={{ 
              p: 2, 
              bgcolor: 'background.default', 
              borderRadius: 1, 
              border: 1, 
              borderColor: 'divider' 
            }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontWeight: 600 }}>
                Quick Login (Demo):
              </Typography>
              {demoCredentials.map((cred, index) => (
                <Box key={index} sx={{ mb: 1 }}>
                  <Link
                    component="button"
                    type="button"
                    onClick={() => onDemoCredentialsClick?.(cred.email, cred.password)}
                    sx={{ 
                      textDecoration: 'none', 
                      fontSize: '0.875rem',
                      display: 'block',
                      textAlign: 'left',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    {cred.role}: {cred.email}
                  </Link>
                </Box>
              ))}
            </Box>
          </>
        )}

        {showSignUpLink && (
          <>
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                or
              </Typography>
            </Divider>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Don&apos;t have an account?{' '}
                <Link
                  component="button"
                  type="button"
                  onClick={onSignUp}
                  sx={{ textDecoration: 'none', fontWeight: 600 }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </>
        )}
      </StyledForm>
    </StyledFormContainer>
  );
};

export default LoginForm;