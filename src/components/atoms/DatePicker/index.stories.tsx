import type { Meta, StoryObj } from '@storybook/react';
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
    dateType: {
      control: { type: 'select' },
      options: ['date', 'datetime-local', 'time'],
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Birth Date',
    helperText: 'Select your pet\'s birth date',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Birth Date',
    value: '2020-06-15',
    helperText: 'Select your pet\'s birth date',
  },
};

export const Required: Story = {
  args: {
    label: 'Birth Date',
    required: true,
    helperText: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'Birth Date',
    error: true,
    helperText: 'Please select a valid date',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Appointment Date',
    min: '2024-01-01',
    max: '2024-12-31',
    helperText: 'Select an appointment date for 2024',
  },
};

export const DateTime: Story = {
  args: {
    label: 'Appointment DateTime',
    dateType: 'datetime-local',
    helperText: 'Select appointment date and time',
  },
};

export const Time: Story = {
  args: {
    label: 'Appointment Time',
    dateType: 'time',
    helperText: 'Select appointment time',
  },
};

export const Filled: Story = {
  args: {
    label: 'Birth Date',
    variant: 'filled',
    helperText: 'Select your pet\'s birth date',
  },
};

export const Standard: Story = {
  args: {
    label: 'Birth Date',
    variant: 'standard',
    helperText: 'Select your pet\'s birth date',
  },
};