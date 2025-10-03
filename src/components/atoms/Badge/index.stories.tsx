import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component for displaying Pokemon types, rarity indicators, and other labels with themed styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fighting', 'poison', 'ground', 'flying', 'bug', 'rock', 'ghost', 'steel', 'fairy', 'normal'],
      description: 'Pokemon type variant that determines the color scheme',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the badge',
    },
    rarity: {
      control: 'select',
      options: ['common', 'uncommon', 'rare', 'ultra-rare', 'secret-rare'],
      description: 'Rarity level that adds special effects',
    },
    children: {
      control: 'text',
      description: 'Content to display inside the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Fire',
    variant: 'fire',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge variant="fire" size="small">Small</Badge>
      <Badge variant="fire" size="medium">Medium</Badge>
      <Badge variant="fire" size="large">Large</Badge>
    </div>
  ),
};

export const PokemonTypes: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px', maxWidth: '600px' }}>
      <Badge variant="fire">Fire</Badge>
      <Badge variant="water">Water</Badge>
      <Badge variant="grass">Grass</Badge>
      <Badge variant="electric">Electric</Badge>
      <Badge variant="psychic">Psychic</Badge>
      <Badge variant="ice">Ice</Badge>
      <Badge variant="dragon">Dragon</Badge>
      <Badge variant="dark">Dark</Badge>
      <Badge variant="fighting">Fighting</Badge>
      <Badge variant="poison">Poison</Badge>
      <Badge variant="ground">Ground</Badge>
      <Badge variant="flying">Flying</Badge>
      <Badge variant="bug">Bug</Badge>
      <Badge variant="rock">Rock</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="steel">Steel</Badge>
      <Badge variant="fairy">Fairy</Badge>
      <Badge variant="normal">Normal</Badge>
    </div>
  ),
};

export const RarityLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Badge variant="fire" rarity="common">Common</Badge>
        <Badge variant="water" rarity="uncommon">Uncommon</Badge>
        <Badge variant="electric" rarity="rare">Rare</Badge>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Badge variant="psychic" rarity="ultra-rare">Ultra Rare</Badge>
        <Badge variant="dragon" rarity="secret-rare">Secret Rare</Badge>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    children: 'Clickable',
    variant: 'electric',
    onClick: () => alert('Badge clicked!'),
  },
};

export const HPIndicator: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <span style={{ fontSize: '14px', fontWeight: 'bold' }}>HP</span>
      <Badge variant="fire" size="large">150</Badge>
    </div>
  ),
};