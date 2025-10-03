// Export all atoms
export { default as Button } from './components/atoms/Button';
export { default as TextField } from './components/atoms/TextField';
export { default as Checkbox } from './components/atoms/Checkbox';
export { default as Typography } from './components/atoms/Typography';
export { default as Icon, iconMap } from './components/atoms/Icon';

// Export types
export type { ButtonProps } from './components/atoms/Button';
export type { TextFieldProps } from './components/atoms/TextField';
export type { CheckboxProps } from './components/atoms/Checkbox';
export type { TypographyProps } from './components/atoms/Typography';
export type { IconProps, IconName } from './components/atoms/Icon';

// Re-export Material UI theme provider for consumers
export { ThemeProvider, createTheme } from '@mui/material/styles';
export { CssBaseline } from '@mui/material';