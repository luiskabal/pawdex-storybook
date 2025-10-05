import type { Meta, StoryObj } from '@storybook/react';
import LoadingButton from './index';

const meta: Meta<typeof LoadingButton> = {
  title: 'Atoms/LoadingButton',
  component: LoadingButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button component with loading state functionality, perfect for authentication forms and async actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'disabled'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loadingSize: {
      control: { type: 'number', min: 10, max: 40, step: 2 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Sign In',
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Sign In',
    variant: 'primary',
    loading: true,
  },
};

export const LoadingWithText: Story = {
  args: {
    children: 'Sign In',
    variant: 'primary',
    loading: true,
    loadingText: 'Signing in...',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
  },
};

export const SecondaryLoading: Story = {
  args: {
    children: 'Cancel',
    variant: 'secondary',
    loading: true,
    loadingText: 'Processing...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Submit',
    variant: 'disabled',
  },
};

export const CustomLoadingSize: Story = {
  args: {
    children: 'Submit',
    variant: 'primary',
    loading: true,
    loadingSize: 16,
    loadingText: 'Please wait...',
  },
};