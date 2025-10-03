import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable checkbox component based on Material UI Checkbox with various colors, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label text for the checkbox',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the checkbox',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox has an error state',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the checkbox',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
      description: 'The color variant of the checkbox',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    indeterminate: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is in an indeterminate state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Checkbox',
    checked: false,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Terms and Conditions',
    helperText: 'Please read and accept our terms and conditions',
    checked: false,
  },
};

export const Error: Story = {
  args: {
    label: 'Required Checkbox',
    helperText: 'This field is required',
    error: true,
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked',
    disabled: true,
    checked: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Checkbox',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Checkbox',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Checkbox',
    size: 'large',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Color',
    color: 'primary',
    checked: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Color',
    color: 'secondary',
    checked: true,
  },
};

export const Success: Story = {
  args: {
    label: 'Success Color',
    color: 'success',
    checked: true,
  },
};

export const Error_Color: Story = {
  args: {
    label: 'Error Color',
    color: 'error',
    checked: true,
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Color',
    color: 'warning',
    checked: true,
  },
};

export const Info: Story = {
  args: {
    label: 'Info Color',
    color: 'info',
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: true,
  },
};