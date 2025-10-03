import { styled } from '@mui/material/styles';
import { Typography as MuiTypography } from '@mui/material';

export const StyledTypography = styled(MuiTypography)<{
  fontWeight?: string;
  truncate?: boolean;
  uppercase?: boolean;
}>(({ theme, fontWeight, truncate, uppercase }) => ({
  // Font weight styles
  ...(fontWeight && {
    fontWeight: {
      light: theme.typography.fontWeightLight,
      regular: theme.typography.fontWeightRegular,
      medium: theme.typography.fontWeightMedium,
      bold: theme.typography.fontWeightBold,
    }[fontWeight],
  }),

  // Truncation styles
  ...(truncate && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
  }),

  // Uppercase transformation
  ...(uppercase && {
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }),

  // Enhanced heading styles
  '&.MuiTypography-h1': {
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.2,
    marginBottom: theme.spacing(2),
  },

  '&.MuiTypography-h2': {
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.3,
    marginBottom: theme.spacing(1.5),
  },

  '&.MuiTypography-h3': {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.4,
    marginBottom: theme.spacing(1.5),
  },

  '&.MuiTypography-h4': {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.4,
    marginBottom: theme.spacing(1),
  },

  '&.MuiTypography-h5': {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.5,
    marginBottom: theme.spacing(1),
  },

  '&.MuiTypography-h6': {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.5,
    marginBottom: theme.spacing(0.5),
  },

  // Subtitle styles
  '&.MuiTypography-subtitle1': {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.6,
    marginBottom: theme.spacing(0.5),
  },

  '&.MuiTypography-subtitle2': {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.6,
    marginBottom: theme.spacing(0.5),
  },

  // Body text styles
  '&.MuiTypography-body1': {
    lineHeight: 1.6,
    marginBottom: theme.spacing(1),
  },

  '&.MuiTypography-body2': {
    lineHeight: 1.6,
    marginBottom: theme.spacing(0.5),
  },

  // Caption and overline styles
  '&.MuiTypography-caption': {
    lineHeight: 1.4,
    color: theme.palette.text.secondary,
  },

  '&.MuiTypography-overline': {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.4,
    color: theme.palette.text.secondary,
  },
}));