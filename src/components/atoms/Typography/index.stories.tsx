import type { Meta, StoryObj } from '@storybook/react';
import Typography from './index';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible typography component based on Material UI Typography with various variants, colors, and styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'],
      description: 'The typography variant to use',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'textPrimary', 'textSecondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the text',
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'The weight of the font',
    },
    truncate: {
      control: { type: 'boolean' },
      description: 'Whether the text should be truncated with ellipsis',
    },
    uppercase: {
      control: { type: 'boolean' },
      description: 'Whether the text should be uppercase',
    },
    children: {
      control: { type: 'text' },
      description: 'The text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Typography',
  },
};

// Heading variants
export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const Heading6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
};

// Subtitle variants
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle 1 - Larger subtitle text',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle 2 - Smaller subtitle text',
  },
};

// Body variants
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body 1 - This is the default body text used for most content. It provides good readability and is suitable for paragraphs.',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body 2 - This is smaller body text, often used for secondary content or in compact layouts.',
  },
};

// Caption and overline
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text - Used for small annotations and metadata',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline text',
  },
};

// Color variants
export const Primary: Story = {
  args: {
    variant: 'h4',
    color: 'primary',
    children: 'Primary Color Text',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'h4',
    color: 'secondary',
    children: 'Secondary Color Text',
  },
};

export const Error: Story = {
  args: {
    variant: 'body1',
    color: 'error',
    children: 'Error Color Text',
  },
};

export const Warning: Story = {
  args: {
    variant: 'body1',
    color: 'warning',
    children: 'Warning Color Text',
  },
};

export const Info: Story = {
  args: {
    variant: 'body1',
    color: 'info',
    children: 'Info Color Text',
  },
};

export const Success: Story = {
  args: {
    variant: 'body1',
    color: 'success',
    children: 'Success Color Text',
  },
};

// Font weight variants
export const Light: Story = {
  args: {
    variant: 'h4',
    fontWeight: 'light',
    children: 'Light Font Weight',
  },
};

export const Regular: Story = {
  args: {
    variant: 'h4',
    fontWeight: 'regular',
    children: 'Regular Font Weight',
  },
};

export const Medium: Story = {
  args: {
    variant: 'h4',
    fontWeight: 'medium',
    children: 'Medium Font Weight',
  },
};

export const Bold: Story = {
  args: {
    variant: 'h4',
    fontWeight: 'bold',
    children: 'Bold Font Weight',
  },
};

// Special styling
export const Truncated: Story = {
  args: {
    variant: 'body1',
    truncate: true,
    children: 'This is a very long text that will be truncated with ellipsis when it exceeds the container width',
    sx: { maxWidth: 200 },
  },
};

export const Uppercase: Story = {
  args: {
    variant: 'h5',
    uppercase: true,
    children: 'Uppercase Text',
  },
};

export const Combined: Story = {
  args: {
    variant: 'h4',
    color: 'primary',
    fontWeight: 'bold',
    uppercase: true,
    children: 'Combined Styling',
  },
};