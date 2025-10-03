import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar component for displaying Pokemon images, trainer portraits, and other character images with rarity-based styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xl'],
      description: 'Size of the avatar',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'Shape variant of the avatar',
    },
    rarity: {
      control: 'select',
      options: ['common', 'uncommon', 'rare', 'ultra-rare', 'secret-rare'],
      description: 'Rarity level that adds special border effects',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the avatar should be clickable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    alt: 'Pikachu',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        size="small"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        size="medium"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        size="large"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        size="xl"
      />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
          alt="Charizard"
          variant="circular"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Circular</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
          alt="Blastoise"
          variant="rounded"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Rounded</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
          alt="Venusaur"
          variant="square"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Square</p>
      </div>
    </div>
  ),
};

export const RarityLevels: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
          alt="Pidgey"
          rarity="common"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Common</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          rarity="uncommon"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Uncommon</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
          alt="Charizard"
          rarity="rare"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Rare</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
          alt="Mewtwo"
          rarity="ultra-rare"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Ultra Rare</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
          alt="Mew"
          rarity="secret-rare"
          size="large"
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px' }}>Secret Rare</p>
      </div>
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar 
        src=""
        alt="No image"
        size="large"
      />
      <Avatar 
        src=""
        alt="Custom fallback"
        size="large"
        fallback="?"
      />
      <Avatar 
        src=""
        alt="Pokemon fallback"
        size="large"
        fallback="⚡"
      />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    alt: 'Clickable Pikachu',
    clickable: true,
    onClick: () => alert('Avatar clicked!'),
  },
};

export const PokemonShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbasaur"
        rarity="common"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        alt="Charmander"
        rarity="common"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        alt="Squirtle"
        rarity="common"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        rarity="uncommon"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        alt="Charizard"
        rarity="rare"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
        alt="Blastoise"
        rarity="rare"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
        alt="Mewtwo"
        rarity="ultra-rare"
      />
      <Avatar 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
        alt="Mew"
        rarity="secret-rare"
      />
    </div>
  ),
};