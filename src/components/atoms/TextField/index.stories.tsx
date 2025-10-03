import type { Meta, StoryObj } from '@storybook/react';
import TextField from './index';

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable text input component based on Material UI TextField with various variants and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
      description: 'The visual style variant of the text field',
    },
    label: {
      control: { type: 'text' },
      description: 'The label for the text field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when the field is empty',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the input',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the field has an error state',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the field is disabled',
    },
    multiline: {
      control: { type: 'boolean' },
      description: 'Whether the field supports multiple lines',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of rows for multiline fields',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default TextField',
    placeholder: 'Enter text here...',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined TextField',
    placeholder: 'Enter text here...',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled TextField',
    placeholder: 'Enter text here...',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Standard TextField',
    placeholder: 'Enter text here...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email with anyone else.',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    helperText: 'This field is required',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: true,
    helperText: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
    value: 'Disabled value',
  },
};

export const Multiline: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    multiline: true,
    rows: 4,
    helperText: 'Please provide detailed information',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    helperText: 'Password must be at least 8 characters long',
  },
};