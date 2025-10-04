import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

// Pet-themed pastel color palette
const petColors = {
  primary: {
    main: '#FFB6C1', // Light pink (puppy nose)
    dark: '#FF91A4',
    contrastText: '#5D4E75',
  },
  secondary: {
    main: '#B8E6B8', // Soft mint green (cat eyes)
    dark: '#9DD99D',
    contrastText: '#4A5D4A',
  },
  tertiary: {
    main: '#E6E6FA', // Lavender (gentle and calming)
    dark: '#D8BFD8',
    contrastText: '#6B5B95',
  },
  warning: {
    main: '#FFEAA7', // Soft yellow (golden retriever)
    dark: '#FDCB6E',
    contrastText: '#6C5CE7',
  },
  disabled: {
    background: '#F5F5F5',
    text: '#BDBDBD',
  }
};

export const StyledButton = styled(MuiButton)<{ customVariant?: string }>(({ theme, customVariant }) => ({
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: '20px', // More rounded for pet-like softness
  padding: theme.spacing(1.5, 3),
  minWidth: '120px',
  fontSize: '0.95rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '2px solid transparent',
  
  // Playful hover animation
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  
  '&:active': {
    transform: 'translateY(0px)',
  },
  
  ...(customVariant === 'primary' && {
    backgroundColor: petColors.primary.main,
    color: petColors.primary.contrastText,
    boxShadow: '0 4px 12px rgba(255, 182, 193, 0.3)',
    '&:hover': {
      backgroundColor: petColors.primary.dark,
      boxShadow: '0 6px 20px rgba(255, 182, 193, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: '0 2px 8px rgba(255, 182, 193, 0.3)',
      transform: 'translateY(0px)',
    },
  }),
  
  ...(customVariant === 'secondary' && {
    backgroundColor: petColors.secondary.main,
    color: petColors.secondary.contrastText,
    boxShadow: '0 4px 12px rgba(184, 230, 184, 0.3)',
    '&:hover': {
      backgroundColor: petColors.secondary.dark,
      boxShadow: '0 6px 20px rgba(184, 230, 184, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: '0 2px 8px rgba(184, 230, 184, 0.3)',
      transform: 'translateY(0px)',
    },
  }),
  
  ...(customVariant === 'tertiary' && {
    backgroundColor: petColors.tertiary.main,
    color: petColors.tertiary.contrastText,
    boxShadow: '0 4px 12px rgba(230, 230, 250, 0.3)',
    '&:hover': {
      backgroundColor: petColors.tertiary.dark,
      boxShadow: '0 6px 20px rgba(230, 230, 250, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: '0 2px 8px rgba(230, 230, 250, 0.3)',
      transform: 'translateY(0px)',
    },
  }),
  
  ...(customVariant === 'warning' && {
    backgroundColor: petColors.warning.main,
    color: petColors.warning.contrastText,
    boxShadow: '0 4px 12px rgba(255, 234, 167, 0.3)',
    '&:hover': {
      backgroundColor: petColors.warning.dark,
      boxShadow: '0 6px 20px rgba(255, 234, 167, 0.4)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: '0 2px 8px rgba(255, 234, 167, 0.3)',
      transform: 'translateY(0px)',
    },
  }),
  
  ...(customVariant === 'outline' && {
    backgroundColor: 'transparent',
    color: petColors.primary.main,
    border: `2px solid ${petColors.primary.main}`,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: petColors.primary.main,
      color: petColors.primary.contrastText,
      boxShadow: '0 4px 12px rgba(255, 182, 193, 0.3)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0px)',
    },
  }),
  
  ...(customVariant === 'disabled' && {
    backgroundColor: petColors.disabled.background,
    color: petColors.disabled.text,
    cursor: 'not-allowed',
    boxShadow: 'none',
    transform: 'none',
    '&:hover': {
      backgroundColor: petColors.disabled.background,
      boxShadow: 'none',
      transform: 'none',
    },
  }),
}));