import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const StyledButton = styled(MuiButton)<{ customVariant?: string }>(({ theme, customVariant }) => ({
  textTransform: 'none',
  fontWeight: 500,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  minWidth: '120px',
  
  ...(customVariant === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: theme.shadows[2],
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[4],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
    },
  }),
  
  ...(customVariant === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    boxShadow: theme.shadows[1],
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: theme.shadows[3],
    },
    '&:active': {
      boxShadow: theme.shadows[0],
    },
  }),
  
  ...(customVariant === 'disabled' && {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    cursor: 'not-allowed',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: theme.palette.action.disabledBackground,
      boxShadow: 'none',
    },
  }),
}));