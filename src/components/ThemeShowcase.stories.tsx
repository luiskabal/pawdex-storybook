import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from './atoms/Button';
import TextField from './atoms/TextField';
import Typography from './atoms/Typography';
import Card from './molecules/Card';
import Badge from './atoms/Badge';
import Checkbox from './atoms/Checkbox';

// Theme Showcase Component
const ThemeShowcase = () => {
  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Typography variant="h1" sx={{ mb: 4, textAlign: 'center' }}>
        Theme Showcase
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', opacity: 0.8 }}>
        Use the theme selector in the toolbar above to see how components look across different themes.
      </Typography>

      <Grid container spacing={4}>
        {/* Buttons Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Buttons
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="tertiary">Tertiary Button</Button>
              <Button variant="warning">Warning Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="disabled" disabled>Disabled Button</Button>
            </Box>
          </Card>
        </Grid>

        {/* Form Elements Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Form Elements
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField 
                label="Sample Text Field" 
                placeholder="Enter text here..."
                helperText="This is helper text"
              />
              <TextField 
                label="Email" 
                type="email"
                placeholder="your@email.com"
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Checkbox />
                <Typography variant="body2">Sample Checkbox</Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Typography Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Typography
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="body1">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              <Typography variant="body2">Small body text - Sed do eiusmod tempor incididunt ut labore.</Typography>
              <Typography variant="caption">Caption text</Typography>
            </Box>
          </Card>
        </Grid>

        {/* Badges and Indicators */}
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Badges & Indicators
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Theme Information */}
        <Grid item xs={12}>
          <Card>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Available Themes
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>🐾 Pet Theme</Typography>
                  <Typography variant="body2">
                    Soft pastels with playful colors. Perfect for pet-related applications.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>💼 Professional</Typography>
                  <Typography variant="body2">
                    Corporate blues and grays for business applications.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>🌙 Dark Mode</Typography>
                  <Typography variant="body2">
                    Modern dark theme with purple and teal accents.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>🌿 Nature</Typography>
                  <Typography variant="body2">
                    Earth tones and greens inspired by nature.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h4" sx={{ mb: 1 }}>🌊 Ocean</Typography>
                  <Typography variant="body2">
                    Blues and teals reminiscent of the ocean.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const meta: Meta<typeof ThemeShowcase> = {
  title: 'Theme Showcase',
  component: ThemeShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive showcase of all components across different themes. Use the theme selector in the toolbar to switch between themes and see how components adapt.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllThemes: Story = {
  render: () => <ThemeShowcase />,
  parameters: {
    docs: {
      description: {
        story: 'This story showcases all major components across different themes. Switch themes using the toolbar to see the visual differences.',
      },
    },
  },
};