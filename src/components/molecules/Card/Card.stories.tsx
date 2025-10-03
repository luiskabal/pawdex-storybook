import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './index';
import { CardRarity, PokemonType } from './index';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Pokemon TCG card component with flip animation functionality. Click on flippable cards to see the back side.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(PokemonType),
    },
    rarity: {
      control: 'select',
      options: Object.values(CardRarity),
    },
    flippable: {
      control: 'boolean',
      description: 'Whether the card can be flipped on click',
    },
    initiallyFlipped: {
      control: 'boolean',
      description: 'Whether the card starts in flipped state',
    },
    cardBackTitle: {
      control: 'text',
      description: 'Title shown on the card back',
    },
    cardBackSubtitle: {
      control: 'text',
      description: 'Subtitle shown on the card back',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card without flip functionality
export const Default: Story = {
  args: {
    name: 'Charizard',
    imageUrl: 'https://images.pokemontcg.io/base1/4_hires.png',
    type: PokemonType.FIRE,
    rarity: CardRarity.RARE,
    hp: 120,
    maxHp: 150,
    attack: 78,
    defense: 58,
    moves: [
      {
        name: 'Fire Spin',
        damage: '100',
        energyCost: '4',
        description: 'Discard 2 Energy attached to this Pokémon.',
      },
      {
        name: 'Flame Burst',
        damage: '30',
        energyCost: '2',
        description: 'Does 10 damage to 2 of your opponent\'s Benched Pokémon.',
      },
    ],
    description: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
    cardNumber: '004',
    flippable: false,
  },
};

// Flippable card with custom back content
export const FlippableCard: Story = {
  args: {
    name: 'Pikachu',
    imageUrl: 'https://images.pokemontcg.io/base1/58_hires.png',
    type: PokemonType.ELECTRIC,
    rarity: CardRarity.COMMON,
    hp: 60,
    maxHp: 60,
    attack: 55,
    defense: 40,
    moves: [
      {
        name: 'Thunder Shock',
        damage: '10',
        energyCost: '1',
        description: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
      },
    ],
    description: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
    cardNumber: '025',
    flippable: true,
    cardBackTitle: 'Electric Mouse Pokémon',
    cardBackSubtitle: 'Generation I',
  },
};

// Card that starts flipped
export const InitiallyFlipped: Story = {
  args: {
    name: 'Blastoise',
    imageUrl: 'https://images.pokemontcg.io/base1/2_hires.png',
    type: PokemonType.WATER,
    rarity: CardRarity.RARE_HOLO,
    hp: 100,
    maxHp: 100,
    attack: 52,
    defense: 83,
    moves: [
      {
        name: 'Hydro Pump',
        damage: '40+',
        energyCost: '3',
        description: 'Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise.',
      },
    ],
    description: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.',
    cardNumber: '009',
    flippable: true,
    initiallyFlipped: true,
    cardBackTitle: 'Shellfish Pokémon',
    cardBackSubtitle: 'Generation I',
  },
};

// Holographic rare card with flip
export const HolographicFlippable: Story = {
  args: {
    name: 'Mewtwo',
    imageUrl: 'https://images.pokemontcg.io/base1/10_hires.png',
    type: PokemonType.PSYCHIC,
    rarity: CardRarity.RARE_HOLO,
    hp: 70,
    maxHp: 70,
    attack: 60,
    defense: 70,
    moves: [
      {
        name: 'Psychic',
        damage: '10+',
        energyCost: '2',
        description: 'Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.',
      },
      {
        name: 'Barrier',
        damage: '30',
        energyCost: '2',
        description: 'Discard 1 Psychic Energy card attached to Mewtwo in order to use this attack.',
      },
    ],
    description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
    cardNumber: '150',
    flippable: true,
    cardBackTitle: 'Genetic Pokémon',
    cardBackSubtitle: 'Generation I - Legendary',
  },
};

// Secret rare card with flip
export const SecretRareFlippable: Story = {
  args: {
    name: 'Shining Gyarados',
    imageUrl: 'https://images.pokemontcg.io/neo4/65_hires.png',
    type: PokemonType.WATER,
    rarity: CardRarity.SECRET_RARE,
    hp: 100,
    maxHp: 100,
    attack: 90,
    defense: 79,
    moves: [
      {
        name: 'Outrage',
        damage: '30+',
        energyCost: '2',
        description: 'Does 30 damage plus 10 more damage for each damage counter on Shining Gyarados.',
      },
    ],
    description: 'Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.',
    cardNumber: '065',
    flippable: true,
    cardBackTitle: 'Shining Pokémon',
    cardBackSubtitle: 'Ultra Rare',
  },
};

// Multiple cards showcase
export const MultipleCards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        name="Squirtle"
        imageUrl="https://images.pokemontcg.io/base1/63_hires.png"
        type={PokemonType.WATER}
        rarity={CardRarity.COMMON}
        hp={40}
        maxHp={40}
        attack={48}
        defense={65}
        moves={[
          {
            name: 'Bubble',
            damage: '10',
            energyCost: '1',
            description: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          },
        ]}
        description="After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth."
        cardNumber="007"
        flippable={true}
        cardBackTitle="Tiny Turtle Pokémon"
        cardBackSubtitle="Generation I"
      />
      <Card
        name="Charmander"
        imageUrl="https://images.pokemontcg.io/base1/46_hires.png"
        type={PokemonType.FIRE}
        rarity={CardRarity.COMMON}
        hp={50}
        maxHp={50}
        attack={52}
        defense={43}
        moves={[
          {
            name: 'Scratch',
            damage: '10',
            energyCost: '1',
          },
          {
            name: 'Ember',
            damage: '30',
            energyCost: '2',
            description: 'Discard 1 Fire Energy card attached to Charmander.',
          },
        ]}
        description="Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
        cardNumber="004"
        flippable={true}
        cardBackTitle="Lizard Pokémon"
        cardBackSubtitle="Generation I"
      />
      <Card
        name="Bulbasaur"
        imageUrl="https://images.pokemontcg.io/base1/44_hires.png"
        type={PokemonType.GRASS}
        rarity={CardRarity.COMMON}
        hp={40}
        maxHp={40}
        attack={49}
        defense={49}
        moves={[
          {
            name: 'Leech Seed',
            damage: '20',
            energyCost: '2',
            description: 'Remove 1 damage counter from Bulbasaur.',
          },
        ]}
        description="A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
        cardNumber="001"
        flippable={true}
        cardBackTitle="Seed Pokémon"
        cardBackSubtitle="Generation I"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple flippable cards showcasing different types and rarities. Click on any card to see its back side.',
      },
    },
  },
};