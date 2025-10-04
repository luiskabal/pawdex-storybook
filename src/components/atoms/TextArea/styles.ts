import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

// Pet-themed pastel colors for TextArea
const petTextAreaColors = {
  primary: '#FFB6C1',      // Light pink
  secondary: '#E6E6FA',    // Lavender
  accent: '#F0E68C',       // Khaki
  success: '#98FB98',      // Pale green
  warning: '#FFEAA7',      // Peach
  error: '#FFB3BA',        // Light coral
  background: '#FFFACD',   // Lemon chiffon
  border: '#DDA0DD',       // Plum
  text: '#696969',         // Dim gray
  placeholder: '#B0B0B0'   // Silver
};

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: petTextAreaColors.background,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(221, 160, 221, 0.1)',
    
    '& fieldset': {
      borderColor: petTextAreaColors.border,
      borderWidth: '2px',
    },
    
    '&:hover': {
      backgroundColor: '#FFF8DC', // Cornsilk
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(221, 160, 221, 0.2)',
      
      '& fieldset': {
        borderColor: petTextAreaColors.primary,
      },
    },
    
    '&.Mui-focused': {
      backgroundColor: '#FFF8DC',
      transform: 'translateY(-1px)',
      boxShadow: '0 6px 16px rgba(255, 182, 193, 0.3)',
      
      '& fieldset': {
        borderColor: petTextAreaColors.primary,
        borderWidth: '3px',
      },
    },
    
    '&.Mui-error': {
      '& fieldset': {
        borderColor: petTextAreaColors.error,
      },
    },
  },
  
  '& .MuiInputLabel-root': {
    color: petTextAreaColors.text,
    fontWeight: 500,
    
    '&.Mui-focused': {
      color: petTextAreaColors.primary,
      transform: 'translate(14px, -9px) scale(0.75)',
    },
    
    '&.Mui-error': {
      color: petTextAreaColors.error,
    },
  },
  
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginTop: theme.spacing(0.5),
    color: petTextAreaColors.text,
    fontSize: '0.75rem',
    
    '&.Mui-error': {
      color: petTextAreaColors.error,
    },
  },
  
  '& .MuiInputBase-input': {
    resize: 'vertical',
    color: petTextAreaColors.text,
    fontSize: '14px',
    lineHeight: 1.5,
    padding: '12px 14px',
    
    '&::placeholder': {
      color: petTextAreaColors.placeholder,
      opacity: 1,
    },
  },
  
  // Scrollbar styling for webkit browsers
  '& .MuiInputBase-input::-webkit-scrollbar': {
    width: '8px',
  },
  
  '& .MuiInputBase-input::-webkit-scrollbar-track': {
    background: petTextAreaColors.background,
    borderRadius: '4px',
  },
  
  '& .MuiInputBase-input::-webkit-scrollbar-thumb': {
    background: petTextAreaColors.border,
    borderRadius: '4px',
    
    '&:hover': {
      background: petTextAreaColors.primary,
    },
  },
}));