import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(1.5),
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const FieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));