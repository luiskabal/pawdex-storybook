import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Alert from './index';
import { Box } from '@mui/material';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Alert component with pet-themed styling. Use the theme selector in the toolbar to see how alerts adapt to different themes (Pet, Professional, Dark, Nature, Ocean).',
      },
    },
  },
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
      description: 'The severity level of the alert',
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the alert',
    },
    onClose: {
      action: 'closed',
      description: 'Callback fired when the close button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    severity: 'success',
    children: 'Pet profile saved successfully! Your furry friend\'s information is now up to date.',
  },
};

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'Remember to schedule your pet\'s annual checkup. Regular visits help keep them healthy and happy!',
  },
};

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'Your pet\'s vaccination is due soon. Please contact your veterinarian to schedule an appointment.',
  },
};

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'Unable to save pet information. Please check your connection and try again.',
  },
};

export const WithCloseButton: Story = {
  args: {
    severity: 'info',
    children: 'This alert can be dismissed by clicking the close button.',
    onClose: () => console.log('Alert closed'),
  },
};

export const AllSeverities: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Alert severity="success">
        🎉 Great news! Your pet&apos;s appointment has been confirmed for tomorrow at 2:00 PM.
      </Alert>
      <Alert severity="info">
        💡 Tip: Regular grooming helps keep your pet comfortable and healthy.
      </Alert>
      <Alert severity="warning">
        ⚠️ Your pet&apos;s medication is running low. Consider ordering a refill soon.
      </Alert>
      <Alert severity="error">
        ❌ Failed to upload pet photo. Please try again with a smaller file size.
      </Alert>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All alert severity levels displayed together to show the visual hierarchy and pet-themed styling.',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    severity: 'info',
    children: 'This is a longer alert message that demonstrates how the component handles multiple lines of text. It includes important information about your pet&apos;s care, upcoming appointments, and general health recommendations that pet owners should be aware of.',
  },
};

const InteractiveAlerts = () => {
  const [alerts, setAlerts] = React.useState([
    { id: 1, severity: 'success' as const, message: 'Pet profile updated!' },
    { id: 2, severity: 'warning' as const, message: 'Vaccination due soon' },
  ]);

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {alerts.map(alert => (
        <Alert
          key={alert.id}
          severity={alert.severity}
          onClose={() => removeAlert(alert.id)}
        >
          {alert.message}
        </Alert>
      ))}
      {alerts.length === 0 && (
        <Alert severity="info">
          All alerts have been dismissed! Refresh the story to see them again.
        </Alert>
      )}
    </Box>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveAlerts />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing dismissible alerts. Click the close buttons to remove alerts.',
      },
    },
  },
};