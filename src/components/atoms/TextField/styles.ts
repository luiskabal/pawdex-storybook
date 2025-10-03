import { styled } from '@mui/material/styles';
import { TextField as MuiTextField } from '@mui/material';

export const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      boxShadow: `0 0 0 1px ${theme.palette.primary.main}20`,
    },
    
    '&.Mui-error fieldset': {
      borderColor: theme.palette.error.main,
    },
    
    '&.Mui-error.Mui-focused fieldset': {
      borderColor: theme.palette.error.main,
      boxShadow: `0 0 0 1px ${theme.palette.error.main}20`,
    },
  },
  
  '& .MuiFilledInput-root': {
    borderRadius: theme.spacing(1, 1, 0, 0),
    backgroundColor: theme.palette.action.hover,
    
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
    },
    
    '&.Mui-focused': {
      backgroundColor: theme.palette.action.selected,
    },
  },
  
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
    
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
  
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginTop: theme.spacing(0.5),
    fontSize: '0.75rem',
    
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
}));