import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './index';

const meta: Meta<typeof DatePicker> = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
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
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper for stories that need state management
const InteractiveDatePicker = (args: any) => {
  const [value, setValue] = useState<Date | null>(args.value || null);
  
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Default: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    helperText: 'Select your pet\'s birth date',
  },
};

export const WithValue: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    value: new Date('2020-06-15'),
    helperText: 'Select your pet\'s birth date',
  },
};

export const Required: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    required: true,
    helperText: 'This field is required',
  },
};

export const WithError: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    error: true,
    helperText: 'Please select a valid date',
  },
};

export const WithMinMax: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Appointment Date',
    minDate: new Date('2024-01-01'),
    maxDate: new Date('2024-12-31'),
    helperText: 'Select an appointment date for 2024',
  },
};

export const Disabled: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    disabled: true,
    value: new Date('2020-06-15'),
    helperText: 'This field is disabled',
  },
};

export const ReadOnly: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    readOnly: true,
    value: new Date('2020-06-15'),
    helperText: 'This field is read-only',
  },
};

export const Filled: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    variant: 'filled',
    helperText: 'Select your pet\'s birth date',
  },
};

export const Standard: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    label: 'Birth Date',
    variant: 'standard',
    helperText: 'Select your pet\'s birth date',
  },
};