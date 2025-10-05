import React from 'react';
import { Box, Container, Paper } from '@mui/material';

export interface AuthLayoutProps {
  /**
   * The content to display inside the layout
   */
  children: React.ReactNode;
  /**
   * Custom container styling props for the main background
   */
  containerSx?: object;
  /**
   * Custom wrapper styling props for the content container
   */
  wrapperSx?: object;
  /**
   * Custom paper styling props for the form container
   */
  paperSx?: object;
  /**
   * Maximum width for the content container
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  /**
   * Paper elevation level
   */
  elevation?: number;
  /**
   * Whether to show the paper container
   */
  showPaper?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  containerSx,
  wrapperSx,
  paperSx,
  maxWidth = 'sm',
  elevation = 24,
  showPaper = true,
}) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: {
          xs: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          sm: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        '.dark &': {
          background: {
            xs: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            sm: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          },
        },
        padding: { xs: 1, sm: 2 },
        transition: 'background 0.3s ease',
        ...containerSx,
      }}
    >
      <Container 
        maxWidth={maxWidth}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...wrapperSx,
        }}
      >
        {showPaper ? (
          <Paper
            elevation={elevation}
            sx={{
              padding: { xs: 3, sm: 4, md: 5 },
              borderRadius: { xs: 2, sm: 3 },
              width: '100%',
              maxWidth: { xs: '100%', sm: 480 },
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: {
                xs: '0 8px 32px rgba(0, 0, 0, 0.12)',
                sm: '0 16px 64px rgba(0, 0, 0, 0.15)',
              },
              '.dark &': {
                background: 'rgba(30, 30, 30, 0.95)',
                backdropFilter: 'blur(10px)',
                boxShadow: {
                  xs: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  sm: '0 16px 64px rgba(0, 0, 0, 0.4)',
                },
              },
              ...paperSx,
            }}
          >
            {children}
          </Paper>
        ) : (
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: '100%', sm: 480 },
              ...paperSx,
            }}
          >
            {children}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default AuthLayout;