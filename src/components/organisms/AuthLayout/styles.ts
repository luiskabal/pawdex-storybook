import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledAuthContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: theme.spacing(1),
  transition: 'background 0.3s ease',
  
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
  },
  
  '.dark &': {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
}));

export const StyledContentWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 480,
}));

export const StyledPaper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  width: '100%',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
    borderRadius: theme.spacing(3),
    boxShadow: '0 16px 64px rgba(0, 0, 0, 0.15)',
  },
  
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
  
  '.dark &': {
    background: 'rgba(30, 30, 30, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    
    [theme.breakpoints.up('sm')]: {
      boxShadow: '0 16px 64px rgba(0, 0, 0, 0.4)',
    },
  },
}));