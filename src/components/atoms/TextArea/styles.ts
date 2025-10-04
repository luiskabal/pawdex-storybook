import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginTop: theme.spacing(0.5),
  },
  '& .MuiInputBase-input': {
    resize: 'vertical',
  },
}));