import React from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface TypographyProps extends Omit<MuiTypographyProps, 'variant'> {
  /**
   * The typography variant
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
  /**
   * The color of the text
   */
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'warning' | 'info' | 'success';
  /**
   * The weight of the font
   */
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
  /**
   * Whether the text should be truncated with ellipsis
   */
  truncate?: boolean;
  /**
   * Whether the text should be uppercase
   */
  uppercase?: boolean;
}

const fontWeightMap = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

const StyledTypography = styled(MuiTypography)<{
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
  truncate?: boolean;
  uppercase?: boolean;
}>(({ fontWeight, truncate, uppercase }) => ({
  ...(fontWeight && fontWeight in fontWeightMap && {
    fontWeight: fontWeightMap[fontWeight as keyof typeof fontWeightMap],
  }),
  ...(truncate && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  ...(uppercase && {
    textTransform: 'uppercase',
  }),
}));

/**
 * Typography component based on Material UI Typography with custom styling options
 */
const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body1',
  color = 'textPrimary',
  fontWeight,
  truncate = false,
  uppercase = false,
  children,
  ...props 
}) => {
  const getColorValue = (colorProp: string) => {
    switch (colorProp) {
      case 'primary':
        return 'primary.main';
      case 'secondary':
        return 'secondary.main';
      case 'textPrimary':
        return 'text.primary';
      case 'textSecondary':
        return 'text.secondary';
      case 'error':
        return 'error.main';
      case 'warning':
        return 'warning.main';
      case 'info':
        return 'info.main';
      case 'success':
        return 'success.main';
      default:
        return colorProp;
    }
  };

  return (
    <StyledTypography
      variant={variant}
      sx={{ color: getColorValue(color) }}
      fontWeight={fontWeight}
      truncate={truncate}
      uppercase={uppercase}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;