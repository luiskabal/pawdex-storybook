import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import AuthLayout from './index';
import LoginForm from '../../molecules/LoginForm';
import SignUpForm from '../../molecules/SignUpForm';
import ForgotPasswordForm from '../../molecules/ForgotPasswordForm';

const meta: Meta<typeof AuthLayout> = {
  title: 'Organisms/AuthLayout',
  component: AuthLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A consistent layout component for authentication pages with customizable styling and responsive design.',
      },
    },
  },
  argTypes: {
    maxWidth: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: 'Maximum width for the content container',
    },
    elevation: {
      control: { type: 'number', min: 0, max: 24 },
      description: 'Paper elevation level',
    },
    showPaper: {
      control: { type: 'boolean' },
      description: 'Whether to show the paper container',
    },
    containerSx: {
      control: { type: 'object' },
      description: 'Custom container styling props',
    },
    wrapperSx: {
      control: { type: 'object' },
      description: 'Custom wrapper styling props',
    },
    paperSx: {
      control: { type: 'object' },
      description: 'Custom paper styling props',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to PawDex
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is the default AuthLayout component
        </Typography>
      </Box>
    ),
  },
};

export const WithLoginForm: Story = {
  args: {
    children: <LoginForm />,
  },
};

export const WithSignUpForm: Story = {
  args: {
    children: <SignUpForm />,
  },
};

export const WithForgotPasswordForm: Story = {
  args: {
    children: <ForgotPasswordForm />,
  },
};

export const CustomStyling: Story = {
  args: {
    children: (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="primary">
          Custom Styled Layout
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This layout has custom styling applied
        </Typography>
      </Box>
    ),
    containerSx: {
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
    },
    paperSx: {
      background: 'rgba(255, 255, 255, 0.98)',
      borderRadius: 4,
      border: '2px solid',
      borderColor: 'primary.main',
    },
  },
};

export const WithoutPaper: Story = {
  args: {
    showPaper: false,
    children: (
      <Box 
        sx={{ 
          textAlign: 'center',
          color: 'white',
          background: 'rgba(0, 0, 0, 0.3)',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          No Paper Container
        </Typography>
        <Typography variant="body1">
          This layout doesn&apos;t use the paper container
        </Typography>
      </Box>
    ),
  },
};

export const ResponsiveLayout: Story = {
  args: {
    children: <LoginForm />,
    containerSx: {
      background: {
        xs: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        md: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      },
    },
    wrapperSx: {
      maxWidth: { xs: '100%', sm: 400, md: 500 },
    },
    paperSx: {
      padding: { xs: 2, sm: 3, md: 4 },
      borderRadius: { xs: 1, sm: 2, md: 3 },
    },
  },
};

export const LargeContainer: Story = {
  args: {
    maxWidth: 'md',
    children: (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Large Container
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          This layout uses a larger container width
        </Typography>
        <LoginForm />
      </Box>
    ),
  },
};

export const MinimalElevation: Story = {
  args: {
    elevation: 2,
    children: <LoginForm />,
    paperSx: {
      background: 'rgba(255, 255, 255, 0.9)',
    },
  },
};

export const HighElevation: Story = {
  args: {
    elevation: 24,
    children: <LoginForm />,
    paperSx: {
      background: 'rgba(255, 255, 255, 1)',
    },
  },
};