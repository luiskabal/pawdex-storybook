import { styled } from '@mui/material/styles';
import { TextField as MuiTextField } from '@mui/material';

// Pet-themed pastel colors for text fields
const petFieldColors = {
  primary: '#FFB6C1', // Light pink
  secondary: '#B8E6B8', // Soft mint green
  background: '#FEFEFE', // Pure white with slight warmth
  hover: '#F8F8FF', // Ghost white
  focused: '#FFF5F8', // Very light pink tint
  error: '#FFB3BA', // Soft coral red
  success: '#BAFFC9', // Light mint success
  text: {
    primary: '#5D4E75', // Soft purple-gray
    secondary: '#6B5B95', // Medium purple
    placeholder: '#A8A8A8', // Soft gray
  }
};

export const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px', // More rounded for pet-like softness
    backgroundColor: petFieldColors.background,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: '0.95rem',
    
    '& fieldset': {
      borderColor: '#E8E8E8',
      borderWidth: '2px',
    },
    
    '&:hover fieldset': {
      borderColor: petFieldColors.primary,
      backgroundColor: petFieldColors.hover,
    },
    
    '&.Mui-focused': {
      backgroundColor: petFieldColors.focused,
      
      '& fieldset': {
        borderColor: petFieldColors.primary,
        borderWidth: '2px',
        boxShadow: `0 0 0 3px rgba(255, 182, 193, 0.15)`,
      },
    },
    
    '&.Mui-error': {
      '& fieldset': {
        borderColor: petFieldColors.error,
      },
      
      '&.Mui-focused fieldset': {
        borderColor: petFieldColors.error,
        boxShadow: `0 0 0 3px rgba(255, 179, 186, 0.15)`,
      },
    },
    
    // Input text styling
    '& input': {
      color: petFieldColors.text.primary,
      padding: theme.spacing(1.5, 2),
      
      '&::placeholder': {
        color: petFieldColors.text.placeholder,
        opacity: 1,
      },
    },
  },
  
  '& .MuiFilledInput-root': {
    borderRadius: '16px 16px 0 0',
    backgroundColor: petFieldColors.hover,
    border: `2px solid transparent`,
    
    '&:hover': {
      backgroundColor: petFieldColors.focused,
      borderColor: petFieldColors.primary,
    },
    
    '&.Mui-focused': {
      backgroundColor: petFieldColors.focused,
      borderColor: petFieldColors.primary,
      boxShadow: `0 0 0 3px rgba(255, 182, 193, 0.15)`,
    },
    
    '&:before, &:after': {
      display: 'none', // Remove the default underline
    },
  },
  
  '& .MuiInputLabel-root': {
    color: petFieldColors.text.secondary,
    fontSize: '0.9rem',
    fontWeight: 500,
    
    '&.Mui-focused': {
      color: petFieldColors.primary,
    },
    
    '&.Mui-error': {
      color: petFieldColors.error,
    },
    
    // Floating label adjustments for rounded corners
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -9px) scale(0.85)',
      backgroundColor: petFieldColors.background,
      padding: '0 8px',
      borderRadius: '8px',
    },
  },
  
  '& .MuiFormHelperText-root': {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.75),
    fontSize: '0.8rem',
    color: petFieldColors.text.secondary,
    
    '&.Mui-error': {
      color: petFieldColors.error,
    },
    
    // Success state for helper text
    '&.success': {
      color: petFieldColors.success,
    },
  },
  
  // Add a subtle glow effect on focus
  '&:focus-within': {
    '& .MuiOutlinedInput-root': {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(255, 182, 193, 0.2)',
    },
  },
}));