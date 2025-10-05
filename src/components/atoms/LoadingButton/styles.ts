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
  
  // Playful hover animation (disabled when loading)
  '&:hover:not(:disabled)': {
    transform: 'translateY(-2px)',
  },
  
  '&:active:not(:disabled)': {
    transform: 'translateY(0px)',
  },
  
  // Primary variant
  ...(customVariant === 'primary' && {
    backgroundColor: petColors.primary.main,
    color: petColors.primary.contrastText,
    boxShadow: `0 4px 12px ${petColors.primary.main}40`,
    
    '&:hover:not(:disabled)': {
      backgroundColor: petColors.primary.dark,
      boxShadow: `0 6px 16px ${petColors.primary.main}60`,
      transform: 'translateY(-2px)',
    },
    
    '&:focus': {
      outline: `3px solid ${petColors.primary.main}60`,
      outlineOffset: '2px',
    },
  }),
  
  // Secondary variant
  ...(customVariant === 'secondary' && {
    backgroundColor: petColors.secondary.main,
    color: petColors.secondary.contrastText,
    boxShadow: `0 4px 12px ${petColors.secondary.main}40`,
    
    '&:hover:not(:disabled)': {
      backgroundColor: petColors.secondary.dark,
      boxShadow: `0 6px 16px ${petColors.secondary.main}60`,
      transform: 'translateY(-2px)',
    },
    
    '&:focus': {
      outline: `3px solid ${petColors.secondary.main}60`,
      outlineOffset: '2px',
    },
  }),
  
  // Disabled variant
  ...(customVariant === 'disabled' && {
    backgroundColor: petColors.disabled.background,
    color: petColors.disabled.text,
    cursor: 'not-allowed',
    boxShadow: 'none',
    
    '&:hover': {
      backgroundColor: petColors.disabled.background,
      transform: 'none',
    },
  }),
  
  // Loading state styles
  '&:disabled': {
    backgroundColor: customVariant === 'primary' ? petColors.primary.main : 
                   customVariant === 'secondary' ? petColors.secondary.main : 
                   petColors.disabled.background,
    color: customVariant === 'primary' ? petColors.primary.contrastText : 
           customVariant === 'secondary' ? petColors.secondary.contrastText : 
           petColors.disabled.text,
    opacity: 0.7,
    cursor: 'not-allowed',
    transform: 'none',
  },
}));