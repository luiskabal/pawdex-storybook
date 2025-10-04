import { styled } from '@mui/material/styles';
import { Alert as MuiAlert } from '@mui/material';

// Pet-themed alert colors
const alertColors = {
  success: {
    background: '#E8F5E8', // Soft green like grass
    border: '#B8E6B8',
    text: '#2E7D32',
    icon: '#4CAF50',
  },
  info: {
    background: '#E3F2FD', // Sky blue like a clear day
    border: '#90CAF9',
    text: '#1565C0',
    icon: '#2196F3',
  },
  warning: {
    background: '#FFF8E1', // Warm yellow like sunshine
    border: '#FFEAA7',
    text: '#E65100',
    icon: '#FF9800',
  },
  error: {
    background: '#FFEBEE', // Soft pink like a gentle warning
    border: '#FFCDD2',
    text: '#C62828',
    icon: '#F44336',
  },
};

export const StyledAlert = styled(MuiAlert)(({ theme, severity = 'info' }) => ({
  borderRadius: '12px',
  border: `1px solid ${alertColors[severity].border}`,
  backgroundColor: alertColors[severity].background,
  color: alertColors[severity].text,
  padding: theme.spacing(1.5, 2),
  fontSize: '0.95rem',
  fontWeight: 500,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  
  '& .MuiAlert-icon': {
    color: alertColors[severity].icon,
    fontSize: '1.25rem',
    marginRight: theme.spacing(1),
  },
  
  '& .MuiAlert-message': {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  },
  
  '& .MuiAlert-action': {
    padding: 0,
    marginRight: 0,
    
    '& .MuiIconButton-root': {
      color: alertColors[severity].text,
      opacity: 0.7,
      padding: theme.spacing(0.5),
      
      '&:hover': {
        opacity: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
  },
  
  // Gentle animation on mount
  animation: 'slideIn 0.3s ease-out',
  
  '@keyframes slideIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));