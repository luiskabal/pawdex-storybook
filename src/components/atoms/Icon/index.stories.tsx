import type { Meta, StoryObj } from '@storybook/react';
import Icon, { IconName, iconMap } from './index';
import { Box, Grid, Typography } from '@mui/material';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible icon component wrapper for Material UI icons with predefined icon set, various sizes, and color options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      description: 'The name of the predefined icon to display',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon',
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled', 'success', 'warning', 'info'],
      description: 'The color of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'home',
  },
};

// Size variants
export const Small: Story = {
  args: {
    name: 'star',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    name: 'star',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    name: 'star',
    size: 'large',
  },
};

export const CustomSize: Story = {
  args: {
    name: 'star',
    size: 48,
  },
};

// Color variants
export const Primary: Story = {
  args: {
    name: 'favorite',
    color: 'primary',
    size: 'large',
  },
};

export const Secondary: Story = {
  args: {
    name: 'favorite',
    color: 'secondary',
    size: 'large',
  },
};

export const Error: Story = {
  args: {
    name: 'error',
    color: 'error',
    size: 'large',
  },
};

export const Warning: Story = {
  args: {
    name: 'warning',
    color: 'warning',
    size: 'large',
  },
};

export const Info: Story = {
  args: {
    name: 'info',
    color: 'info',
    size: 'large',
  },
};

export const Success: Story = {
  args: {
    name: 'checkCircle',
    color: 'success',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    name: 'settings',
    color: 'disabled',
    size: 'large',
  },
};

// Common icons showcase
export const CommonIcons: Story = {
  render: () => (
    <Box sx={{ width: 600 }}>
      <Typography variant="h6" gutterBottom>
        Common Icons
      </Typography>
      <Grid container spacing={2}>
        {(['home', 'person', 'settings', 'search', 'favorite', 'star', 'delete', 'edit'] as IconName[]).map((iconName) => (
          <Grid item xs={3} key={iconName} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Icon name={iconName} size="large" color="primary" />
              <Typography variant="caption">{iconName}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};

// Navigation icons
export const NavigationIcons: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Typography variant="h6" gutterBottom>
        Navigation Icons
      </Typography>
      <Grid container spacing={2}>
        {(['arrowBack', 'arrowForward', 'expandMore', 'expandLess', 'menu', 'close'] as IconName[]).map((iconName) => (
          <Grid item xs={4} key={iconName} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Icon name={iconName} size="large" color="action" />
              <Typography variant="caption">{iconName}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};

// Action icons
export const ActionIcons: Story = {
  render: () => (
    <Box sx={{ width: 500 }}>
      <Typography variant="h6" gutterBottom>
        Action Icons
      </Typography>
      <Grid container spacing={2}>
        {(['add', 'remove', 'check', 'download', 'upload', 'share', 'print'] as IconName[]).map((iconName) => (
          <Grid item xs={3} key={iconName} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
              <Icon name={iconName} size="large" color="secondary" />
              <Typography variant="caption">{iconName}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};

// Status icons
export const StatusIcons: Story = {
  render: () => (
    <Box sx={{ width: 400 }}>
      <Typography variant="h6" gutterBottom>
        Status Icons
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Icon name="checkCircle" size="large" color="success" />
            <Typography variant="caption">Success</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Icon name="error" size="large" color="error" />
            <Typography variant="caption">Error</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Icon name="warning" size="large" color="warning" />
            <Typography variant="caption">Warning</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Icon name="info" size="large" color="info" />
            <Typography variant="caption">Info</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  ),
};