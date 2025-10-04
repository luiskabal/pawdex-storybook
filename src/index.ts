// Export all atoms
export { default as Button } from './components/atoms/Button';
export { default as TextField } from './components/atoms/TextField';
export { default as Select } from './components/atoms/Select';
export { default as TextArea } from './components/atoms/TextArea';
export { default as DatePicker } from './components/atoms/DatePicker';
export { default as Checkbox } from './components/atoms/Checkbox';
export { default as Typography } from './components/atoms/Typography';
export { default as Icon, iconMap } from './components/atoms/Icon';
export { default as Badge } from './components/atoms/Badge';
export { default as ProgressBar } from './components/atoms/ProgressBar';
export { default as Avatar } from './components/atoms/Avatar';
export { default as Divider } from './components/atoms/Divider';
export { default as Alert } from './components/atoms/Alert';

// Export molecules
export { default as Card } from './components/molecules/Card';
export { default as FormField } from './components/molecules/FormField';
export { default as FormSection } from './components/molecules/FormSection';

// Export organisms
export { default as ClinicProfileForm } from './components/organisms/ClinicProfileForm';

// Export types
export type { ButtonProps } from './components/atoms/Button';
export type { TextFieldProps } from './components/atoms/TextField';
export type { SelectProps, SelectOption } from './components/atoms/Select';
export type { TextAreaProps } from './components/atoms/TextArea';
export type { DatePickerProps } from './components/atoms/DatePicker';
export type { CheckboxProps } from './components/atoms/Checkbox';
export type { TypographyProps } from './components/atoms/Typography';
export type { IconProps, IconName } from './components/atoms/Icon';
export type { BadgeProps, BadgeVariant, BadgeSize, BadgeRarity } from './components/atoms/Badge';
export type { ProgressBarProps, ProgressBarVariant, ProgressBarSize } from './components/atoms/ProgressBar';
export type { AvatarProps, AvatarSize, AvatarVariant, AvatarRarity } from './components/atoms/Avatar';
export type { DividerProps, DividerVariant, DividerOrientation, DividerThickness } from './components/atoms/Divider';
export type { AlertProps } from './components/atoms/Alert';
export type { CardProps, CardRarity, PokemonType, MoveData } from './components/molecules/Card';
export type { FormFieldProps } from './components/molecules/FormField';
export type { FormSectionProps } from './components/molecules/FormSection';
export type { ClinicProfileFormProps, PetProfileData } from './components/organisms/ClinicProfileForm';

// Re-export Material UI theme provider for consumers
export { ThemeProvider, createTheme } from '@mui/material/styles';
export { CssBaseline, Grid, Box, Chip } from '@mui/material';