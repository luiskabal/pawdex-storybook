import React from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface FormSectionProps {
  /**
   * The title of the form section
   */
  title?: string;
  /**
   * Subtitle or description for the section
   */
  subtitle?: string;
  /**
   * The form fields to render in this section
   */
  children: React.ReactNode;
  /**
   * Whether to show a divider after the title
   */
  showDivider?: boolean;
  /**
   * Whether to wrap the section in a paper container
   */
  elevated?: boolean;
  /**
   * Custom spacing around the section
   */
  spacing?: number;
  /**
   * Whether to take full width
   */
  fullWidth?: boolean;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(1.5),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

/**
 * FormSection molecule that groups related form fields with optional title and styling
 */
const FormSection: React.FC<FormSectionProps> = ({
  title,
  subtitle,
  children,
  showDivider = true,
  elevated = false,
  spacing = 3,
  fullWidth = true,
}) => {
  const content = (
    <>
      {(title || subtitle) && (
        <TitleContainer>
          {title && (
            <Typography variant="h6" component="h3" gutterBottom>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {subtitle}
            </Typography>
          )}
          {showDivider && (title || subtitle) && (
            <Divider sx={{ mt: 1, mb: 2 }} />
          )}
        </TitleContainer>
      )}
      <FieldsContainer>
        {children}
      </FieldsContainer>
    </>
  );

  if (elevated) {
    return (
      <StyledPaper 
        elevation={1}
        sx={{ 
          mb: spacing,
          width: fullWidth ? '100%' : 'auto'
        }}
      >
        {content}
      </StyledPaper>
    );
  }

  return (
    <StyledBox 
      sx={{ 
        mb: spacing,
        width: fullWidth ? '100%' : 'auto'
      }}
    >
      {content}
    </StyledBox>
  );
};

export default FormSection;