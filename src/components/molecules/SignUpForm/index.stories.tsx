import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@mui/material';
import SignUpForm from './index';

const meta: Meta<typeof SignUpForm> = {
  title: 'Molecules/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive sign-up form component with validation for user registration.',
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
    onSignIn: { action: 'sign in clicked' },
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
    showSignInLink: {
      control: 'boolean',
      description: 'Whether to show the sign in link',
    },
    showTermsCheckbox: {
      control: 'boolean',
      description: 'Whether to show terms and conditions checkbox',
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
    nameFieldsSx: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: action('form-submitted'),
    onSignIn: action('sign-in-clicked'),
    loading: false,
    showSignInLink: true,
    showTermsCheckbox: true,
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
    error: 'An account with this email already exists. Please try a different email or sign in.',
  },
};

export const WithSuccess: Story = {
  args: {
    ...Default.args,
    success: 'Account created successfully! Please check your email to verify your account.',
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
    nameFieldsSx: {
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 2, sm: 3 },
    },
  },
};

export const ResponsiveLayout: Story = {
  args: {
    ...Default.args,
    containerSx: {
      maxWidth: { xs: '100%', sm: 480, md: 520 },
      mx: 'auto',
      p: { xs: 2, sm: 3, md: 4 },
    },
    headerSx: {
      mb: { xs: 2, sm: 3, md: 4 },
      '& h1': {
        fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
      },
    },
    nameFieldsSx: {
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 1.5, sm: 2 },
    },
  },
};

export const WithoutSignInLink: Story = {
  args: {
    ...Default.args,
    showSignInLink: false,
  },
};

export const WithoutTermsCheckbox: Story = {
  args: {
    ...Default.args,
    showTermsCheckbox: false,
  },
};

export const MinimalForm: Story = {
  args: {
    ...Default.args,
    showSignInLink: false,
    showTermsCheckbox: false,
  },
};

export const NetworkError: Story = {
  args: {
    ...Default.args,
    error: 'Network error. Please check your connection and try again.',
  },
};

export const ValidationError: Story = {
  args: {
    ...Default.args,
    error: 'Please correct the errors below and try again.',
  },
};