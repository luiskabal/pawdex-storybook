import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './index';

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
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
    rows: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Pet Description',
    placeholder: 'Describe your pet...',
    helperText: 'Provide details about your pet',
    rows: 4,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Pet Description',
    value: 'Max is a friendly Golden Retriever who loves to play fetch and swim. He is very social with other dogs and children.',
    helperText: 'Provide details about your pet',
    rows: 4,
  },
};

export const Required: Story = {
  args: {
    label: 'Medical Notes',
    placeholder: 'Enter medical notes...',
    required: true,
    helperText: 'This field is required',
    rows: 3,
  },
};

export const WithError: Story = {
  args: {
    label: 'Pet Description',
    placeholder: 'Describe your pet...',
    error: true,
    helperText: 'Description must be at least 10 characters',
    rows: 4,
  },
};

export const LargeTextArea: Story = {
  args: {
    label: 'Detailed Medical History',
    placeholder: 'Enter detailed medical history...',
    helperText: 'Include all relevant medical information',
    rows: 8,
  },
};

export const Filled: Story = {
  args: {
    label: 'Pet Description',
    variant: 'filled',
    placeholder: 'Describe your pet...',
    helperText: 'Provide details about your pet',
    rows: 4,
  },
};

export const Standard: Story = {
  args: {
    label: 'Pet Description',
    variant: 'standard',
    placeholder: 'Describe your pet...',
    helperText: 'Provide details about your pet',
    rows: 4,
  },
};