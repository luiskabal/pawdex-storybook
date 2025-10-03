import type { Meta, StoryObj } from '@storybook/react';
import Divider from './index';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Divider component for separating content sections in Pokemon cards and other UI elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted', 'gradient', 'decorative'],
      description: 'Visual style of the divider',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    thickness: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
      description: 'Thickness of the divider',
    },
    color: {
      control: 'color',
      description: 'Custom color for the divider',
    },
    spacing: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'Spacing around the divider',
    },
    children: {
      control: 'text',
      description: 'Content to display in the center of the divider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Solid</h4>
        <Divider variant="solid" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Dashed</h4>
        <Divider variant="dashed" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Dotted</h4>
        <Divider variant="dotted" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Gradient</h4>
        <Divider variant="gradient" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Decorative</h4>
        <Divider variant="decorative" />
      </div>
    </div>
  ),
};

export const AllThickness: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Thin</h4>
        <Divider thickness="thin" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Medium</h4>
        <Divider thickness="medium" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Thick</h4>
        <Divider thickness="thick" />
      </div>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p>Pokemon Stats</p>
        <Divider>HP</Divider>
        <p>Health Points: 150</p>
      </div>
      <div>
        <p>Attack Moves</p>
        <Divider variant="gradient">⚡</Divider>
        <p>Thunder Bolt</p>
      </div>
      <div>
        <p>Card Information</p>
        <Divider variant="decorative">Rarity</Divider>
        <p>Ultra Rare</p>
      </div>
    </div>
  ),
};

export const VerticalDividers: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '200px', alignItems: 'stretch' }}>
      <div style={{ padding: '16px', flex: 1 }}>
        <h4>Pokemon Info</h4>
        <p>Name: Pikachu</p>
        <p>Type: Electric</p>
      </div>
      <Divider orientation="vertical" />
      <div style={{ padding: '16px', flex: 1 }}>
        <h4>Stats</h4>
        <p>HP: 150</p>
        <p>Attack: 120</p>
      </div>
      <Divider orientation="vertical" variant="dashed" />
      <div style={{ padding: '16px', flex: 1 }}>
        <h4>Moves</h4>
        <p>Thunder Bolt</p>
        <p>Quick Attack</p>
      </div>
    </div>
  ),
};

export const VerticalWithContent: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '200px', alignItems: 'stretch' }}>
      <div style={{ padding: '16px', flex: 1, background: '#f8f9fa' }}>
        <h4>Left Section</h4>
        <p>Some content here</p>
      </div>
      <Divider orientation="vertical" variant="gradient">VS</Divider>
      <div style={{ padding: '16px', flex: 1, background: '#f8f9fa' }}>
        <h4>Right Section</h4>
        <p>Some content here</p>
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#dc3545' }}>Fire Type</h4>
        <Divider color="#dc3545" thickness="medium" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#007bff' }}>Water Type</h4>
        <Divider color="#007bff" variant="gradient" thickness="medium" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#28a745' }}>Grass Type</h4>
        <Divider color="#28a745" variant="decorative" thickness="thick" />
      </div>
    </div>
  ),
};

export const CardSections: Story = {
  render: () => (
    <div style={{ 
      width: '300px', 
      border: '1px solid #dee2e6', 
      borderRadius: '12px', 
      padding: '16px',
      background: 'white'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: '0', color: '#333' }}>Pikachu</h3>
        <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '14px' }}>Electric Type</p>
      </div>
      
      <Divider variant="gradient" />
      
      <div style={{ margin: '16px 0' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Stats</h4>
        <p style={{ margin: '4px 0', fontSize: '12px' }}>HP: 150</p>
        <p style={{ margin: '4px 0', fontSize: '12px' }}>Attack: 120</p>
      </div>
      
      <Divider>Moves</Divider>
      
      <div style={{ margin: '16px 0' }}>
        <p style={{ margin: '4px 0', fontSize: '12px' }}>⚡ Thunder Bolt</p>
        <p style={{ margin: '4px 0', fontSize: '12px' }}>💨 Quick Attack</p>
      </div>
      
      <Divider variant="decorative" color="#ffd700" />
      
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>Ultra Rare</p>
      </div>
    </div>
  ),
};