import type { Meta, StoryObj } from '@storybook/react';
import FormField from './index';
import TextField from '../../atoms/TextField';
import Select from '../../atoms/Select';
import TextArea from '../../atoms/TextArea';
import DatePicker from '../../atoms/DatePicker';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    spacing: {
      control: { type: 'number', min: 0, max: 5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const petSpeciesOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'bird', label: 'Bird' },
  { value: 'rabbit', label: 'Rabbit' },
];

export const WithTextField: Story = {
  args: {
    label: 'Pet Name',
    required: true,
    helperText: 'Enter your pet\'s name',
    children: <TextField placeholder="e.g., Max, Bella, Charlie" />,
  },
};

export const WithSelect: Story = {
  args: {
    label: 'Pet Species',
    required: true,
    helperText: 'Select the type of pet',
    children: <Select options={petSpeciesOptions} placeholder="Choose a species" />,
  },
};

export const WithTextArea: Story = {
  args: {
    label: 'Pet Description',
    helperText: 'Describe your pet\'s personality and characteristics',
    children: <TextArea placeholder="Tell us about your pet..." rows={4} />,
  },
};

export const WithDatePicker: Story = {
  args: {
    label: 'Birth Date',
    required: true,
    helperText: 'Select your pet\'s birth date',
    children: <DatePicker />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Pet Name',
    required: true,
    error: true,
    errorMessage: 'Pet name is required',
    children: <TextField placeholder="e.g., Max, Bella, Charlie" error />,
  },
};

export const WithoutLabel: Story = {
  args: {
    helperText: 'This field has no label',
    children: <TextField placeholder="Enter text..." />,
  },
};

export const CustomSpacing: Story = {
  args: {
    label: 'Pet Name',
    helperText: 'This field has custom spacing',
    spacing: 4,
    children: <TextField placeholder="e.g., Max, Bella, Charlie" />,
  },
};