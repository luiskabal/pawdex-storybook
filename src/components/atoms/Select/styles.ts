import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

// Pet-themed pastel colors for select fields (matching TextField)
const petSelectColors = {
  primary: '#FFB6C1', // Light pink
  secondary: '#B8E6B8', // Soft mint green
  background: '#FEFEFE', // Pure white with slight warmth
  hover: '#F8F8FF', // Ghost white
  focused: '#FFF5F8', // Very light pink tint
  error: '#FFB3BA', // Soft coral red
  text: {
    primary: '#5D4E75', // Soft purple-gray
    secondary: '#6B5B95', // Medium purple
    placeholder: '#A8A8A8', // Soft gray
  }
};

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px', // More rounded for pet-like softness
    backgroundColor: petSelectColors.background,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: '0.95rem',
    
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E8E8E8',
      borderWidth: '2px',
    },
    
    '&:hover': {
      backgroundColor: petSelectColors.hover,
      transform: 'translateY(-1px)',
      
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: petSelectColors.primary,
      },
    },
    
    '&.Mui-focused': {
      backgroundColor: petSelectColors.focused,
      boxShadow: '0 4px 12px rgba(255, 182, 193, 0.2)',
      
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: petSelectColors.primary,
        borderWidth: '2px',
        boxShadow: `0 0 0 3px rgba(255, 182, 193, 0.15)`,
      },
    },
    
    '&.Mui-error': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: petSelectColors.error,
      },
      
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: petSelectColors.error,
        boxShadow: `0 0 0 3px rgba(255, 179, 186, 0.15)`,
      },
    },
    
    // Select input styling
    '& .MuiSelect-select': {
      color: petSelectColors.text.primary,
      padding: theme.spacing(1.5, 2),
      display: 'flex',
      alignItems: 'center',
    },
    
    // Dropdown arrow styling
    '& .MuiSelect-icon': {
      color: petSelectColors.text.secondary,
      transition: 'transform 0.3s ease',
    },
    
    '&.Mui-focused .MuiSelect-icon': {
      transform: 'rotate(180deg)',
      color: petSelectColors.primary,
    },
  },
  
  '& .MuiInputLabel-root': {
    color: petSelectColors.text.secondary,
    fontSize: '0.9rem',
    fontWeight: 500,
    
    '&.Mui-focused': {
      color: petSelectColors.primary,
    },
    
    '&.Mui-error': {
      color: petSelectColors.error,
    },
    
    // Floating label adjustments for rounded corners
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.85)',
      backgroundColor: petSelectColors.background,
      padding: '0 8px',
      borderRadius: '8px',
    },
  },
  
  '& .MuiFormHelperText-root': {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.75),
    fontSize: '0.8rem',
    color: petSelectColors.text.secondary,
    
    '&.Mui-error': {
      color: petSelectColors.error,
    },
  },
}));

// Styled menu for dropdown options
export const StyledSelectMenu = {
  PaperProps: {
    sx: {
      borderRadius: '12px',
      marginTop: '8px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      border: `1px solid ${petSelectColors.primary}40`,
      
      '& .MuiMenuItem-root': {
        color: petSelectColors.text.primary,
        fontSize: '0.95rem',
        padding: '12px 16px',
        borderRadius: '8px',
        margin: '4px 8px',
        transition: 'all 0.2s ease',
        
        '&:hover': {
          backgroundColor: petSelectColors.hover,
          color: petSelectColors.primary,
        },
        
        '&.Mui-selected': {
          backgroundColor: `${petSelectColors.primary}20`,
          color: petSelectColors.primary,
          fontWeight: 600,
          
          '&:hover': {
            backgroundColor: `${petSelectColors.primary}30`,
          },
        },
      },
    },
  },
};