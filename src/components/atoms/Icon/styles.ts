import { styled } from '@mui/material/styles';
import { SvgIcon } from '@mui/material';

export const StyledIcon = styled(SvgIcon)<{ 
  iconSize?: 'small' | 'medium' | 'large' | number;
}>(({ theme, iconSize }) => ({
  transition: theme.transitions.create(['color', 'transform', 'opacity']),
  cursor: 'inherit',
  
  // Size variants
  ...(typeof iconSize === 'string' && {
    fontSize: {
      small: '1.25rem',
      medium: '1.5rem', 
      large: '2rem',
    }[iconSize],
  }),
  
  ...(typeof iconSize === 'number' && {
    fontSize: `${iconSize}px`,
    width: `${iconSize}px`,
    height: `${iconSize}px`,
  }),
  
  // Interactive states
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(1.1)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
  
  // Color variants
  '&.MuiSvgIcon-colorPrimary': {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  
  '&.MuiSvgIcon-colorSecondary': {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
  
  '&.MuiSvgIcon-colorError': {
    color: theme.palette.error.main,
    '&:hover': {
      color: theme.palette.error.dark,
    },
  },
  
  '&.MuiSvgIcon-colorWarning': {
    color: theme.palette.warning.main,
    '&:hover': {
      color: theme.palette.warning.dark,
    },
  },
  
  '&.MuiSvgIcon-colorInfo': {
    color: theme.palette.info.main,
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
  
  '&.MuiSvgIcon-colorSuccess': {
    color: theme.palette.success.main,
    '&:hover': {
      color: theme.palette.success.dark,
    },
  },
  
  '&.MuiSvgIcon-colorAction': {
    color: theme.palette.action.active,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  
  '&.MuiSvgIcon-colorDisabled': {
    color: theme.palette.action.disabled,
    cursor: 'not-allowed',
    '&:hover': {
      transform: 'none',
      filter: 'none',
    },
  },
  
  // Focus styles for accessibility
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: theme.spacing(0.5),
  },
}));