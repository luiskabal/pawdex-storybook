import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component that adapts to different themes. Use the theme selector in the toolbar to see how the button changes across Pet, Professional, Dark, Nature, and Ocean themes. Features primary, secondary, tertiary, warning, outline, and disabled variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'warning', 'outline', 'disabled'],
      description: 'The visual style variant of the button',
    },
    children: {
      control: { type: 'text' },
      description: 'The content to display inside the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    children: 'Disabled Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    children: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    children: 'Medium Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    children: 'Large Button',
    size: 'large',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Interactive: Story = {
  args: {
    variant: 'primary',
    children: 'Interactive Button',
  },
  play: async () => {
    // This story can be used for interaction testing
  },
};