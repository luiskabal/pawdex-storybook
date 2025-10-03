import type { Meta, StoryObj } from '@storybook/react';
import Card from './index';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Pokemon TCG-style card component that combines multiple atoms to create a complete trading card experience.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Pokemon name',
    },
    type: {
      control: 'select',
      options: ['fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fighting', 'poison', 'ground', 'flying', 'bug', 'rock', 'ghost', 'steel', 'fairy', 'normal'],
      description: 'Pokemon type',
    },
    rarity: {
      control: 'select',
      options: ['common', 'uncommon', 'rare', 'ultra-rare', 'secret-rare'],
      description: 'Card rarity level',
    },
    hp: {
      control: { type: 'number', min: 1, max: 300 },
      description: 'Current HP',
    },
    maxHp: {
      control: { type: 'number', min: 1, max: 300 },
      description: 'Maximum HP',
    },
    attack: {
      control: { type: 'number', min: 0, max: 200 },
      description: 'Attack power',
    },
    defense: {
      control: { type: 'number', min: 0, max: 200 },
      description: 'Defense power',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    name: 'Pikachu',
    type: 'electric',
    rarity: 'common',
    hp: 60,
    maxHp: 60,
    attack: 55,
    defense: 40,
    moves: [
      {
        name: 'Thunder Shock',
        damage: 20,
        energyCost: 1,
        description: 'Flip a coin. If tails, this attack does nothing.',
      },
      {
        name: 'Agility',
        energyCost: 2,
        description: 'Flip a coin. If heads, prevent all effects of attacks, including damage, done to Pikachu during your opponent\'s next turn.',
      },
    ],
    description: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
    cardNumber: '025',
    clickable: true,
  },
};

// Fire type Pokemon
export const Charizard: Story = {
  args: {
    name: 'Charizard',
    type: 'fire',
    rarity: 'rare',
    hp: 120,
    maxHp: 120,
    attack: 84,
    defense: 78,
    moves: [
      {
        name: 'Fire Spin',
        damage: 100,
        energyCost: 4,
        description: 'Discard 2 Energy attached to this Pokémon.',
      },
      {
        name: 'Flame Thrower',
        damage: 60,
        energyCost: 3,
        description: 'Discard an Energy card attached to this Pokémon.',
      },
    ],
    description: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
    cardNumber: '006',
    clickable: true,
  },
};

// Water type Pokemon
export const Blastoise: Story = {
  args: {
    name: 'Blastoise',
    type: 'water',
    rarity: 'rare',
    hp: 140,
    maxHp: 140,
    attack: 83,
    defense: 100,
    moves: [
      {
        name: 'Hydro Pump',
        damage: 80,
        energyCost: 3,
        description: 'Does 10 more damage for each Water Energy attached to this Pokémon.',
      },
      {
        name: 'Water Gun',
        damage: 40,
        energyCost: 2,
        description: 'A basic water attack.',
      },
    ],
    description: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.',
    cardNumber: '009',
    clickable: true,
  },
};

// Grass type Pokemon
export const Venusaur: Story = {
  args: {
    name: 'Venusaur',
    type: 'grass',
    rarity: 'rare',
    hp: 140,
    maxHp: 140,
    attack: 82,
    defense: 83,
    moves: [
      {
        name: 'Solar Beam',
        damage: 120,
        energyCost: 4,
        description: 'This attack can\'t be used during your next turn.',
      },
      {
        name: 'Vine Whip',
        damage: 30,
        energyCost: 2,
        description: 'A basic grass attack.',
      },
    ],
    description: 'The flower on its back releases a soothing scent that enhances emotions.',
    cardNumber: '003',
    clickable: true,
  },
};

// Ultra Rare Pokemon
export const MewTwo: Story = {
  args: {
    name: 'Mewtwo',
    type: 'psychic',
    rarity: 'ultra-rare',
    hp: 130,
    maxHp: 130,
    attack: 110,
    defense: 90,
    moves: [
      {
        name: 'Psystrike',
        damage: 120,
        energyCost: 3,
        description: 'This attack\'s damage isn\'t affected by any effects on your opponent\'s Active Pokémon.',
      },
      {
        name: 'Psychic',
        damage: 60,
        energyCost: 2,
        description: 'Does 10 more damage for each Energy attached to your opponent\'s Active Pokémon.',
      },
    ],
    description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
    cardNumber: '150',
    clickable: true,
  },
};

// Secret Rare Pokemon
export const ShinyCharizard: Story = {
  args: {
    name: 'Shiny Charizard',
    type: 'dragon',
    rarity: 'secret-rare',
    hp: 180,
    maxHp: 180,
    attack: 150,
    defense: 120,
    moves: [
      {
        name: 'Dragon Pulse',
        damage: 130,
        energyCost: 3,
        description: 'Discard the top 2 cards of your deck.',
      },
      {
        name: 'Fire Blast',
        damage: 200,
        energyCost: 5,
        description: 'Discard 2 Energy attached to this Pokémon.',
      },
    ],
    description: 'A rare black Charizard with incredible power. Its flames burn hotter than any other Charizard.',
    cardNumber: '006★',
    clickable: true,
  },
};

// Damaged Pokemon
export const DamagedPikachu: Story = {
  args: {
    name: 'Pikachu',
    type: 'electric',
    rarity: 'common',
    hp: 20,
    maxHp: 60,
    attack: 55,
    defense: 40,
    moves: [
      {
        name: 'Thunder Shock',
        damage: 20,
        energyCost: 1,
        description: 'Flip a coin. If tails, this attack does nothing.',
      },
    ],
    description: 'This Pikachu has taken some damage in battle.',
    cardNumber: '025',
    clickable: true,
  },
};

// Simple card without moves
export const SimpleCard: Story = {
  args: {
    name: 'Magikarp',
    type: 'water',
    rarity: 'common',
    hp: 30,
    maxHp: 30,
    attack: 10,
    defense: 55,
    description: 'In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.',
    cardNumber: '129',
    clickable: false,
  },
};

// Card showcase with multiple rarities
export const RarityShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        name="Common"
        type="normal"
        rarity="common"
        hp={50}
        attack={30}
        defense={30}
        cardNumber="001"
      />
      <Card
        name="Uncommon"
        type="fighting"
        rarity="uncommon"
        hp={70}
        attack={50}
        defense={40}
        cardNumber="002"
      />
      <Card
        name="Rare"
        type="fire"
        rarity="rare"
        hp={100}
        attack={80}
        defense={60}
        cardNumber="003"
      />
      <Card
        name="Ultra Rare"
        type="psychic"
        rarity="ultra-rare"
        hp={130}
        attack={110}
        defense={90}
        cardNumber="004"
      />
      <Card
        name="Secret Rare"
        type="dragon"
        rarity="secret-rare"
        hp={180}
        attack={150}
        defense={120}
        cardNumber="005★"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all rarity levels from common to secret rare.',
      },
    },
  },
};

// Type showcase
export const TypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', maxWidth: '1200px' }}>
      <Card name="Fire Type" type="fire" rarity="common" hp={80} attack={60} defense={50} cardNumber="F01" />
      <Card name="Water Type" type="water" rarity="common" hp={90} attack={50} defense={70} cardNumber="W01" />
      <Card name="Grass Type" type="grass" rarity="common" hp={70} attack={55} defense={65} cardNumber="G01" />
      <Card name="Electric Type" type="electric" rarity="common" hp={60} attack={65} defense={45} cardNumber="E01" />
      <Card name="Psychic Type" type="psychic" rarity="uncommon" hp={80} attack={70} defense={60} cardNumber="P01" />
      <Card name="Ice Type" type="ice" rarity="uncommon" hp={75} attack={60} defense={80} cardNumber="I01" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different Pokemon types with their characteristic colors.',
      },
    },
  },
};