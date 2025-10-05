import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginForm from './index';

const meta: Meta<typeof LoginForm> = {
  title: 'Molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A complete login form with email and password fields, validation, and loading states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
    showSignUpLink: {
      control: { type: 'boolean' },
    },
    showForgotPasswordLink: {
      control: { type: 'boolean' },
    },
    showDemoCredentials: {
      control: { type: 'boolean' },
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
    onSignUp: action('onSignUp'),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
    onSignUp: action('onSignUp'),
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid email or password. Please try again.',
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
    onSignUp: action('onSignUp'),
  },
};

export const WithoutSignUpLink: Story = {
  args: {
    showSignUpLink: false,
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
  },
};

export const WithSuccess: Story = {
  args: {
    success: 'Login successful! Redirecting...',
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
    onSignUp: action('onSignUp'),
  },
};

export const WithDemoCredentials: Story = {
  args: {
    showDemoCredentials: true,
    demoCredentials: [
      { role: 'Admin', email: 'admin@pawdex.com', password: 'admin123' },
      { role: 'Veterinarian', email: 'vet@pawdex.com', password: 'vet123' },
      { role: 'Receptionist', email: 'reception@pawdex.com', password: 'reception123' },
    ],
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
    onSignUp: action('onSignUp'),
    onDemoCredentialsClick: action('onDemoCredentialsClick'),
  },
};

export const CustomStyling: Story = {
  args: {
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
    onSignUp: action('onSignUp'),
    containerSx: {
      maxWidth: '500px',
      backgroundColor: 'primary.light',
      borderRadius: 4,
    },
    headerSx: {
      color: 'primary.main',
    },
    formSx: {
      gap: 3,
    },
    alertSx: {
      borderRadius: 2,
    },
  },
};

export const ResponsiveLayout: Story = {
  args: {
    onSubmit: action('onSubmit'),
    onForgotPassword: action('onForgotPassword'),
    onSignUp: action('onSignUp'),
    containerSx: {
      maxWidth: { xs: '100%', sm: '400px', md: '450px' },
      padding: { xs: 2, sm: 3, md: 4 },
      margin: { xs: 1, sm: 2 },
    },
    headerSx: {
      marginBottom: { xs: 2, sm: 3 },
    },
  },
};

export const WithoutForgotPasswordLink: Story = {
  args: {
    showForgotPasswordLink: false,
    onSubmit: action('onSubmit'),
    onSignUp: action('onSignUp'),
  },
};

export const MinimalForm: Story = {
  args: {
    showSignUpLink: false,
    showForgotPasswordLink: false,
    onSubmit: action('onSubmit'),
  },
};