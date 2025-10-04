import { styled } from '@mui/material/styles';
import { FormControl, Box } from '@mui/material';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiFormLabel-root': {
    marginBottom: theme.spacing(1),
    fontWeight: 500,
    color: theme.palette.text.primary,
    '&.Mui-required': {
      '&::after': {
        content: '" *"',
        color: theme.palette.error.main,
      },
    },
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));