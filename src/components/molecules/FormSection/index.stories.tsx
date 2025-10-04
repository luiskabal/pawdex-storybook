import type { Meta, StoryObj } from '@storybook/react';
import FormSection from './index';
import FormField from '../FormField';
import TextField from '../../atoms/TextField';
import Select from '../../atoms/Select';
import DatePicker from '../../atoms/DatePicker';

const meta: Meta<typeof FormSection> = {
  title: 'Molecules/FormSection',
  component: FormSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showDivider: {
      control: { type: 'boolean' },
    },
    elevated: {
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

export const BasicInfo: Story = {
  args: {
    title: 'Basic Information',
    subtitle: 'Enter your pet\'s basic details',
    children: (
      <>
        <FormField label="Pet Name" required>
          <TextField placeholder="e.g., Max, Bella, Charlie" />
        </FormField>
        <FormField label="Species" required>
          <Select options={petSpeciesOptions} placeholder="Choose a species" />
        </FormField>
        <FormField label="Birth Date">
          <DatePicker />
        </FormField>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    title: 'Medical Information',
    subtitle: 'Health and medical details',
    elevated: true,
    children: (
      <>
        <FormField label="Veterinarian Name">
          <TextField placeholder="Dr. Smith" />
        </FormField>
        <FormField label="Last Checkup">
          <DatePicker />
        </FormField>
        <FormField label="Allergies">
          <TextField placeholder="None known" />
        </FormField>
      </>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    children: (
      <>
        <FormField label="Pet Name" required>
          <TextField placeholder="e.g., Max, Bella, Charlie" />
        </FormField>
        <FormField label="Species" required>
          <Select options={petSpeciesOptions} placeholder="Choose a species" />
        </FormField>
      </>
    ),
  },
};

export const NoDivider: Story = {
  args: {
    title: 'Contact Information',
    subtitle: 'How we can reach you',
    showDivider: false,
    children: (
      <>
        <FormField label="Owner Name" required>
          <TextField placeholder="John Doe" />
        </FormField>
        <FormField label="Phone Number" required>
          <TextField placeholder="(555) 123-4567" />
        </FormField>
        <FormField label="Email">
          <TextField placeholder="john@example.com" type="email" />
        </FormField>
      </>
    ),
  },
};

export const CustomSpacing: Story = {
  args: {
    title: 'Emergency Contact',
    spacing: 5,
    children: (
      <>
        <FormField label="Emergency Contact Name">
          <TextField placeholder="Jane Doe" />
        </FormField>
        <FormField label="Emergency Phone">
          <TextField placeholder="(555) 987-6543" />
        </FormField>
      </>
    ),
  },
};