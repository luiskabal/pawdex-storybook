import { styled } from '@mui/material/styles';
import { Checkbox as MuiCheckbox, FormControlLabel, FormControl } from '@mui/material';

export const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.spacing(0.5),
  transition: theme.transitions.create(['background-color', 'box-shadow']),
  
  '&:hover': {
    backgroundColor: 'transparent',
    '& .MuiSvgIcon-root': {
      filter: 'brightness(1.1)',
      transform: 'scale(1.05)',
    },
  },
  
  '&.Mui-focusVisible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: theme.spacing(0.5),
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    transition: theme.transitions.create(['color', 'filter', 'transform']),
  },
  
  '&.MuiCheckbox-colorPrimary': {
    '&.Mui-checked': {
      color: theme.palette.primary.main,
    },
  },
  
  '&.MuiCheckbox-colorSecondary': {
    '&.Mui-checked': {
      color: theme.palette.secondary.main,
    },
  },
  
  '&.MuiCheckbox-colorSuccess': {
    '&.Mui-checked': {
      color: theme.palette.success.main,
    },
  },
  
  '&.MuiCheckbox-colorError': {
    '&.Mui-checked': {
      color: theme.palette.error.main,
    },
  },
  
  '&.MuiCheckbox-colorWarning': {
    '&.Mui-checked': {
      color: theme.palette.warning.main,
    },
  },
  
  '&.MuiCheckbox-colorInfo': {
    '&.Mui-checked': {
      color: theme.palette.info.main,
    },
  },
  
  '&.Mui-disabled': {
    opacity: 0.6,
    '& .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  alignItems: 'flex-start',
  
  '& .MuiFormControlLabel-label': {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: theme.palette.text.primary,
    paddingTop: theme.spacing(0.25),
    
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: 'fit-content',
  
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginTop: theme.spacing(0.5),
    fontSize: '0.75rem',
    
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
}));