import React, { useState } from 'react';
import { Box, Typography, Link, Divider, Checkbox, FormControlLabel } from '@mui/material';
import TextField from '../../atoms/TextField';
import PasswordField from '../../atoms/PasswordField';
import LoadingButton from '../../atoms/LoadingButton';
import { StyledForm, StyledFormContainer } from './styles';

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface SignUpFormProps {
  /**
   * Callback function when form is submitted
   */
  onSubmit?: (data: SignUpFormData) => void | Promise<void>;
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
   * Callback for sign in link
   */
  onSignIn?: () => void;
  /**
   * Whether to show the sign in link
   */
  showSignInLink?: boolean;
  /**
   * Whether to show terms and conditions checkbox
   */
  showTermsCheckbox?: boolean;
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
   * Custom name fields container styling props
   */
  nameFieldsSx?: object;
}

/**
 * SignUpForm component with all registration fields
 */
const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  loading = false,
  error,
  success,
  onSignIn,
  showSignInLink = true,
  showTermsCheckbox = true,
  containerSx,
  headerSx,
  formSx,
  alertSx,
  nameFieldsSx,
}) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleInputChange = (field: keyof SignUpFormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'agreeToTerms' ? e.target.checked : e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({});

    // Validate fields
    const newErrors: Partial<Record<keyof SignUpFormData, string>> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (showTermsCheckbox && !formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (onSubmit) {
      await onSubmit(formData);
    }
  };

  return (
    <StyledFormContainer sx={containerSx}>
      <Box sx={{ textAlign: 'center', mb: 3, ...headerSx }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Join PawDex to manage your veterinary clinic
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
        <Box sx={{ display: 'flex', gap: 2, ...nameFieldsSx }}>
          <TextField
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName}
            required
            fullWidth
            autoComplete="given-name"
            placeholder="Enter your first name"
          />

          <TextField
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName}
            required
            fullWidth
            autoComplete="family-name"
            placeholder="Enter your last name"
          />
        </Box>

        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={!!errors.email}
          helperText={errors.email}
          required
          fullWidth
          autoComplete="email"
          placeholder="Enter your email"
        />

        <PasswordField
          label="Password"
          value={formData.password}
          onChange={handleInputChange('password')}
          error={!!errors.password}
          helperText={errors.password || 'Must be at least 8 characters'}
          required
          fullWidth
          autoComplete="new-password"
          placeholder="Create a password"
        />

        <PasswordField
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          required
          fullWidth
          autoComplete="new-password"
          placeholder="Confirm your password"
        />

        {showTermsCheckbox && (
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.agreeToTerms}
                onChange={handleInputChange('agreeToTerms')}
                color="primary"
              />
            }
            label={
              <Typography variant="body2" color="text.secondary">
                I agree to the{' '}
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </Typography>
            }
            sx={{ alignItems: 'flex-start', mt: 1 }}
          />
        )}

        {errors.agreeToTerms && (
          <Typography variant="body2" color="error.main" sx={{ mt: -1 }}>
            {errors.agreeToTerms}
          </Typography>
        )}

        <LoadingButton
          type="submit"
          variant="primary"
          loading={loading}
          loadingText="Creating account..."
          fullWidth
          size="large"
        >
          Create Account
        </LoadingButton>

        {showSignInLink && (
          <>
            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                or
              </Typography>
            </Divider>

            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Link
                  component="button"
                  type="button"
                  onClick={onSignIn}
                  sx={{ textDecoration: 'none', fontWeight: 600 }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </>
        )}
      </StyledForm>
    </StyledFormContainer>
  );
};

export default SignUpForm;