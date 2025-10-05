import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@mui/material';
import ForgotPasswordForm from './index';

const meta: Meta<typeof ForgotPasswordForm> = {
  title: 'Molecules/ForgotPasswordForm',
  component: ForgotPasswordForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A password recovery form component that allows users to request a password reset link.',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    onSubmit: { action: 'submitted' },
    onBackToSignIn: { action: 'back to sign in clicked' },
    loading: {
      control: 'boolean',
      description: 'Whether the form is in loading state',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    success: {
      control: 'text',
      description: 'Success message to display',
    },
    showBackToSignInLink: {
      control: 'boolean',
      description: 'Whether to show the back to sign in link',
    },
    containerSx: {
      control: { type: 'object' },
    },
    headerSx: {
      control: { type: 'object' },
    },
    formSx: {
      control: { type: 'object' },
    },
    alertSx: {
      control: { type: 'object' },
    },
    backLinkSx: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: action('form-submitted'),
    onBackToSignIn: action('back-to-sign-in-clicked'),
    loading: false,
    showBackToSignInLink: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'No account found with this email address. Please check your email or create a new account.',
  },
};

export const WithSuccess: Story = {
  args: {
    ...Default.args,
    success: 'Password reset link sent! Please check your email and follow the instructions to reset your password.',
  },
};

export const WithoutBackLink: Story = {
  args: {
    ...Default.args,
    showBackToSignInLink: false,
  },
};

export const NetworkError: Story = {
  args: {
    ...Default.args,
    error: 'Network error. Please check your connection and try again.',
  },
};

export const RateLimitError: Story = {
  args: {
    ...Default.args,
    error: 'Too many reset attempts. Please wait 15 minutes before trying again.',
  },
};

export const SuccessWithBackLink: Story = {
  args: {
    ...Default.args,
    success: 'Reset link sent successfully! Check your email for further instructions.',
    showBackToSignInLink: true,
  },
};

export const CustomStyling: Story = {
  args: {
    ...Default.args,
    containerSx: {
      bgcolor: 'background.paper',
      borderRadius: 3,
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      p: 4,
    },
    headerSx: {
      mb: 4,
      '& h1': {
        color: 'primary.main',
        fontWeight: 'bold',
      },
    },
    formSx: {
      '& .MuiTextField-root': {
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
      },
    },
    alertSx: {
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'divider',
    },
    backLinkSx: {
      mt: 3,
      p: 2,
      bgcolor: 'action.hover',
      borderRadius: 1,
    },
  },
};

export const ResponsiveLayout: Story = {
  args: {
    ...Default.args,
    containerSx: {
      maxWidth: { xs: '100%', sm: 400, md: 480 },
      mx: 'auto',
      p: { xs: 2, sm: 3, md: 4 },
    },
    headerSx: {
      mb: { xs: 2, sm: 3, md: 4 },
      '& h1': {
        fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
      },
    },
    backLinkSx: {
      mt: { xs: 2, sm: 3 },
    },
  },
};