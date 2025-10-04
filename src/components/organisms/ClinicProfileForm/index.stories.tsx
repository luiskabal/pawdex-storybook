import type { Meta, StoryObj } from '@storybook/react';
import ClinicProfileForm from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ClinicProfileForm> = {
  title: 'Organisms/ClinicProfileForm',
  component: ClinicProfileForm,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive form for creating pet clinic profiles with sections for pet information, owner details, medical history, and emergency contacts.',
      },
    },
  },
  argTypes: {
    onSubmit: { action: 'submitted' },
    onCancel: { action: 'cancelled' },
    loading: {
      control: 'boolean',
      description: 'Whether the form is in loading state',
    },
    elevated: {
      control: 'boolean',
      description: 'Whether to show form sections in elevated cards',
    },
    submitText: {
      control: 'text',
      description: 'Custom text for the submit button',
    },
    showCancel: {
      control: 'boolean',
      description: 'Whether to show the cancel button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ClinicProfileForm>;

export const Default: Story = {
  args: {
    onSubmit: action('form-submitted'),
    onCancel: action('form-cancelled'),
    elevated: true,
    showCancel: true,
  },
};

export const WithInitialData: Story = {
  args: {
    ...Default.args,
    initialData: {
      petName: 'Max',
      species: 'dog',
      breed: 'Golden Retriever',
      gender: 'male',
      weight: '65 lbs',
      color: 'Golden',
      ownerName: 'John Smith',
      ownerPhone: '(555) 123-4567',
      ownerEmail: 'john.smith@email.com',
      ownerAddress: '123 Main Street\nAnytown, ST 12345',
      veterinarian: 'Dr. Johnson, Pet Care Clinic',
      vaccinations: 'Rabies (2023-03-15)\nDHPP (2023-03-15)\nBordetella (2023-06-01)',
      allergies: 'None known',
      emergencyName: 'Jane Smith',
      emergencyPhone: '(555) 987-6543',
      emergencyRelation: 'family',
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    submitText: 'Creating Profile...',
  },
};

export const FlatDesign: Story = {
  args: {
    ...Default.args,
    elevated: false,
  },
};

export const NoCancel: Story = {
  args: {
    ...Default.args,
    showCancel: false,
    submitText: 'Save Profile',
  },
};

export const EditMode: Story = {
  args: {
    ...WithInitialData.args,
    submitText: 'Update Profile',
    initialData: {
      ...WithInitialData.args.initialData,
      birthDate: '2020-05-15',
      lastCheckup: '2023-08-20',
      medications: 'Heartgard Plus (monthly)\nFrontline (monthly)',
      medicalNotes: 'Healthy dog with no major health issues. Slightly overweight, recommend diet adjustment.',
    },
  },
};

export const CatProfile: Story = {
  args: {
    ...Default.args,
    initialData: {
      petName: 'Whiskers',
      species: 'cat',
      breed: 'Persian',
      gender: 'female',
      weight: '8 lbs',
      color: 'White with gray patches',
      ownerName: 'Sarah Johnson',
      ownerPhone: '(555) 456-7890',
      ownerEmail: 'sarah.j@email.com',
      veterinarian: 'Dr. Martinez, Feline Health Center',
      vaccinations: 'FVRCP (2023-04-10)\nRabies (2023-04-10)',
      allergies: 'Sensitive to fish-based foods',
    },
  },
};

export const EmergencyContact: Story = {
  args: {
    ...Default.args,
    initialData: {
      petName: 'Buddy',
      species: 'dog',
      ownerName: 'Mike Wilson',
      ownerPhone: '(555) 111-2222',
      emergencyName: 'Lisa Wilson',
      emergencyPhone: '(555) 333-4444',
      emergencyRelation: 'family',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing the importance of emergency contact information for pet care.',
      },
    },
  },
};