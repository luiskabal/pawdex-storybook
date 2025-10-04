import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormSection from '../../molecules/FormSection';
import FormField from '../../molecules/FormField';
import TextField from '../../atoms/TextField';
import Select from '../../atoms/Select';
import TextArea from '../../atoms/TextArea';
import DatePicker from '../../atoms/DatePicker';
import Button from '../../atoms/Button';

export interface PetProfileData {
  // Basic Information
  petName: string;
  species: string;
  breed: string;
  birthDate: string;
  gender: string;
  weight: string;
  color: string;
  
  // Owner Information
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  ownerAddress: string;
  
  // Medical Information
  veterinarian: string;
  lastCheckup: string;
  vaccinations: string;
  allergies: string;
  medications: string;
  medicalNotes: string;
  
  // Emergency Contact
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
}

export interface ClinicProfileFormProps {
  /**
   * Initial form data
   */
  initialData?: Partial<PetProfileData>;
  /**
   * Callback when form is submitted
   */
  onSubmit?: (data: PetProfileData) => void;
  /**
   * Callback when form is cancelled
   */
  onCancel?: () => void;
  /**
   * Whether the form is in loading state
   */
  loading?: boolean;
  /**
   * Whether to show the form in elevated cards
   */
  elevated?: boolean;
  /**
   * Custom submit button text
   */
  submitText?: string;
  /**
   * Whether to show cancel button
   */
  showCancel?: boolean;
}

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  padding: theme.spacing(2),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'flex-end',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

// Form options
const speciesOptions = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'bird', label: 'Bird' },
  { value: 'rabbit', label: 'Rabbit' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'guinea-pig', label: 'Guinea Pig' },
  { value: 'fish', label: 'Fish' },
  { value: 'reptile', label: 'Reptile' },
  { value: 'other', label: 'Other' },
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'unknown', label: 'Unknown' },
];

const relationOptions = [
  { value: 'family', label: 'Family Member' },
  { value: 'friend', label: 'Friend' },
  { value: 'neighbor', label: 'Neighbor' },
  { value: 'coworker', label: 'Coworker' },
  { value: 'other', label: 'Other' },
];

/**
 * ClinicProfileForm organism for creating comprehensive pet clinic profiles
 */
const ClinicProfileForm: React.FC<ClinicProfileFormProps> = ({
  initialData = {},
  onSubmit,
  onCancel,
  loading = false,
  elevated = true,
  submitText = 'Create Profile',
  showCancel = true,
}) => {
  const [formData, setFormData] = useState<PetProfileData>({
    petName: '',
    species: '',
    breed: '',
    birthDate: '',
    gender: '',
    weight: '',
    color: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    ownerAddress: '',
    veterinarian: '',
    lastCheckup: '',
    vaccinations: '',
    allergies: '',
    medications: '',
    medicalNotes: '',
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    ...initialData,
  });

  const handleInputChange = (field: keyof PetProfileData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: unknown } }
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {/* Basic Pet Information */}
        <FormSection
          title="Pet Information"
          subtitle="Basic details about your pet"
          elevated={elevated}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormField label="Pet Name" required>
                <TextField
                  value={formData.petName}
                  onChange={handleInputChange('petName')}
                  placeholder="e.g., Max, Bella, Charlie"
                  required
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Species" required>
                <Select
                  value={formData.species}
                  onChange={handleInputChange('species')}
                  options={speciesOptions}
                  placeholder="Choose a species"
                  required
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Breed">
                <TextField
                  value={formData.breed}
                  onChange={handleInputChange('breed')}
                  placeholder="e.g., Golden Retriever, Persian"
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Gender">
                <Select
                  value={formData.gender}
                  onChange={handleInputChange('gender')}
                  options={genderOptions}
                  placeholder="Select gender"
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Birth Date">
                <DatePicker
                  value={formData.birthDate}
                  onChange={handleInputChange('birthDate')}
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Weight">
                <TextField
                  value={formData.weight}
                  onChange={handleInputChange('weight')}
                  placeholder="e.g., 25 lbs, 5 kg"
                />
              </FormField>
            </Grid>
            <Grid item xs={12}>
              <FormField label="Color/Markings">
                <TextField
                  value={formData.color}
                  onChange={handleInputChange('color')}
                  placeholder="e.g., Golden, Black with white spots"
                />
              </FormField>
            </Grid>
          </Grid>
        </FormSection>

        {/* Owner Information */}
        <FormSection
          title="Owner Information"
          subtitle="Contact details for the pet owner"
          elevated={elevated}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormField label="Owner Name" required>
                <TextField
                  value={formData.ownerName}
                  onChange={handleInputChange('ownerName')}
                  placeholder="John Doe"
                  required
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Phone Number" required>
                <TextField
                  value={formData.ownerPhone}
                  onChange={handleInputChange('ownerPhone')}
                  placeholder="(555) 123-4567"
                  type="tel"
                  required
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Email Address">
                <TextField
                  value={formData.ownerEmail}
                  onChange={handleInputChange('ownerEmail')}
                  placeholder="john@example.com"
                  type="email"
                />
              </FormField>
            </Grid>
            <Grid item xs={12}>
              <FormField label="Address">
                <TextArea
                  value={formData.ownerAddress}
                  onChange={handleInputChange('ownerAddress')}
                  placeholder="123 Main St, City, State, ZIP"
                  rows={3}
                />
              </FormField>
            </Grid>
          </Grid>
        </FormSection>

        {/* Medical Information */}
        <FormSection
          title="Medical Information"
          subtitle="Health and veterinary details"
          elevated={elevated}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormField label="Primary Veterinarian">
                <TextField
                  value={formData.veterinarian}
                  onChange={handleInputChange('veterinarian')}
                  placeholder="Dr. Smith, ABC Animal Hospital"
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Last Checkup">
                <DatePicker
                  value={formData.lastCheckup}
                  onChange={handleInputChange('lastCheckup')}
                />
              </FormField>
            </Grid>
            <Grid item xs={12}>
              <FormField label="Vaccinations">
                <TextArea
                  value={formData.vaccinations}
                  onChange={handleInputChange('vaccinations')}
                  placeholder="List current vaccinations and dates..."
                  rows={3}
                />
              </FormField>
            </Grid>
            <Grid item xs={12}>
              <FormField label="Known Allergies">
                <TextArea
                  value={formData.allergies}
                  onChange={handleInputChange('allergies')}
                  placeholder="List any known allergies or sensitivities..."
                  rows={2}
                />
              </FormField>
            </Grid>
            <Grid item xs={12}>
              <FormField label="Current Medications">
                <TextArea
                  value={formData.medications}
                  onChange={handleInputChange('medications')}
                  placeholder="List current medications and dosages..."
                  rows={3}
                />
              </FormField>
            </Grid>
            <Grid item xs={12}>
              <FormField label="Additional Medical Notes">
                <TextArea
                  value={formData.medicalNotes}
                  onChange={handleInputChange('medicalNotes')}
                  placeholder="Any additional medical history or notes..."
                  rows={4}
                />
              </FormField>
            </Grid>
          </Grid>
        </FormSection>

        {/* Emergency Contact */}
        <FormSection
          title="Emergency Contact"
          subtitle="Alternative contact in case owner is unavailable"
          elevated={elevated}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormField label="Emergency Contact Name">
                <TextField
                  value={formData.emergencyName}
                  onChange={handleInputChange('emergencyName')}
                  placeholder="Jane Doe"
                />
              </FormField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Emergency Phone">
                <TextField
                  value={formData.emergencyPhone}
                  onChange={handleInputChange('emergencyPhone')}
                  placeholder="(555) 987-6543"
                  type="tel"
                />
              </FormField>
            </Grid>
            <Grid item xs={12}>
              <FormField label="Relationship to Owner">
                <Select
                  value={formData.emergencyRelation}
                  onChange={handleInputChange('emergencyRelation')}
                  options={relationOptions}
                  placeholder="Select relationship"
                />
              </FormField>
            </Grid>
          </Grid>
        </FormSection>

        {/* Form Actions */}
        <ButtonContainer>
          {showCancel && (
            <Button
              variant="secondary"
              onClick={onCancel}
              disabled={loading}
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
          >
            {loading ? 'Creating...' : submitText}
          </Button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default ClinicProfileForm;