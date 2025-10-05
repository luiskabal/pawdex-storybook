import type { Meta, StoryObj } from '@storybook/react';
import PasswordField from './index';

const meta: Meta<typeof PasswordField> = {
  title: 'Atoms/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A password input field with show/hide password functionality, built on Material UI TextField.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
    },
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    showToggle: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: true,
    helperText: 'Password must be at least 8 characters long',
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    required: true,
    helperText: 'This field is required',
  },
};

export const WithoutToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    showToggle: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    disabled: true,
  },
};

export const Filled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    variant: 'filled',
  },
};

export const Standard: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    variant: 'standard',
  },
};