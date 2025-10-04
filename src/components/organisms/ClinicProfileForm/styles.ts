import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  margin: '0 auto',
  padding: theme.spacing(2),
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'flex-end',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    gap: theme.spacing(1),
    
    '& > button': {
      width: '100%',
    },
  },
}));

export const SectionContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  
  '&:last-child': {
    marginBottom: 0,
  },
}));

export const GridContainer = styled(Box)(({ theme }) => ({
  '& .MuiGrid-item': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));