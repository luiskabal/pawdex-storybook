import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledFormContainer = styled(Box)(({ theme }) => ({
  maxWidth: '450px',
  width: '100%',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${theme.palette.divider}`,
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  
  '& .MuiTextField-root': {
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1.5),
      transition: 'all 0.2s ease-in-out',
      
      '&:hover': {
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      
      '&.Mui-focused': {
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  
  '& .MuiButton-root': {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.5),
    fontSize: '1rem',
    fontWeight: 600,
  },
  
  '& .MuiFormControlLabel-root': {
    marginLeft: 0,
    alignItems: 'flex-start',
    
    '& .MuiCheckbox-root': {
      padding: theme.spacing(0.5, 1, 0.5, 0),
    },
    
    '& .MuiFormControlLabel-label': {
      lineHeight: 1.4,
    },
  },
}));