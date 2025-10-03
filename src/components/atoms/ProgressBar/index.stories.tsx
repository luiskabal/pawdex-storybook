import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './index';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ProgressBar component for displaying HP, experience, energy, and other progress indicators with Pokemon-themed styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 200 },
      description: 'Current value of the progress',
    },
    max: {
      control: { type: 'number', min: 1, max: 200 },
      description: 'Maximum value of the progress',
    },
    variant: {
      control: 'select',
      options: ['hp', 'exp', 'energy', 'damage'],
      description: 'Type of progress bar with different color schemes',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the progress bar',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the progress label',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate the progress fill',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 150,
    max: 200,
    variant: 'hp',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Small</h4>
        <ProgressBar value={75} max={100} size="small" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Medium</h4>
        <ProgressBar value={75} max={100} size="medium" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Large</h4>
        <ProgressBar value={75} max={100} size="large" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>HP (Health Points)</h4>
        <ProgressBar value={120} max={150} variant="hp" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Experience</h4>
        <ProgressBar value={850} max={1000} variant="exp" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Energy</h4>
        <ProgressBar value={3} max={4} variant="energy" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Damage</h4>
        <ProgressBar value={80} max={100} variant="damage" />
      </div>
    </div>
  ),
};

export const HPStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#28a745' }}>Healthy (100%)</h4>
        <ProgressBar value={150} max={150} variant="hp" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#28a745' }}>Good (75%)</h4>
        <ProgressBar value={112} max={150} variant="hp" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#ffc107' }}>Moderate (50%)</h4>
        <ProgressBar value={75} max={150} variant="hp" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#ffc107' }}>Low (30%)</h4>
        <ProgressBar value={45} max={150} variant="hp" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#dc3545' }}>Critical (10%)</h4>
        <ProgressBar value={15} max={150} variant="hp" />
      </div>
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    value: 80,
    max: 100,
    variant: 'hp',
    showLabel: false,
  },
};

export const CustomLabel: Story = {
  args: {
    value: 85,
    max: 100,
    variant: 'exp',
    label: '85% to next level',
  },
};

export const NoAnimation: Story = {
  args: {
    value: 60,
    max: 100,
    variant: 'energy',
    animated: false,
  },
};