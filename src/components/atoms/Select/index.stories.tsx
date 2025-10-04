import type { Meta, StoryObj } from '@storybook/react';
import Select from './index';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const petSpeciesOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'bird', label: 'Bird' },
  { value: 'rabbit', label: 'Rabbit' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'fish', label: 'Fish' },
];

const dogBreedOptions = [
  { value: 'labrador', label: 'Labrador Retriever' },
  { value: 'golden', label: 'Golden Retriever' },
  { value: 'bulldog', label: 'Bulldog' },
  { value: 'beagle', label: 'Beagle' },
  { value: 'poodle', label: 'Poodle' },
  { value: 'german-shepherd', label: 'German Shepherd' },
];

export const Default: Story = {
  args: {
    label: 'Pet Species',
    options: petSpeciesOptions,
    placeholder: 'Select a species',
    helperText: 'Choose the type of pet',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Pet Species',
    options: petSpeciesOptions,
    value: 'dog',
    helperText: 'Choose the type of pet',
  },
};

export const Required: Story = {
  args: {
    label: 'Pet Species',
    options: petSpeciesOptions,
    placeholder: 'Select a species',
    required: true,
    helperText: 'This field is required',
  },
};

export const WithError: Story = {
  args: {
    label: 'Pet Species',
    options: petSpeciesOptions,
    placeholder: 'Select a species',
    error: true,
    helperText: 'Please select a valid species',
  },
};

export const DogBreeds: Story = {
  args: {
    label: 'Dog Breed',
    options: dogBreedOptions,
    placeholder: 'Select a breed',
    helperText: 'Choose the dog breed',
  },
};

export const Filled: Story = {
  args: {
    label: 'Pet Species',
    options: petSpeciesOptions,
    variant: 'filled',
    placeholder: 'Select a species',
    helperText: 'Choose the type of pet',
  },
};

export const Standard: Story = {
  args: {
    label: 'Pet Species',
    options: petSpeciesOptions,
    variant: 'standard',
    placeholder: 'Select a species',
    helperText: 'Choose the type of pet',
  },
};