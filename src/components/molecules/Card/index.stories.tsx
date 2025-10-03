import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardRarity, PokemonType } from './index';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A Pokemon TCG-style card component with flip animation functionality. Click on flippable cards to see the back side.',
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
      options: Object.values(PokemonType),
      description: 'Pokemon type',
    },
    rarity: {
      control: 'select',
      options: Object.values(CardRarity),
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
      description: 'Whether the card is clickable (deprecated - use flippable)',
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

// Default story
export const Default: Story = {
  args: {
    name: 'Thunder Cat',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face',
    type: PokemonType.ELECTRIC,
    rarity: CardRarity.COMMON,
    hp: 60,
    maxHp: 60,
    attack: 55,
    defense: 40,
    moves: [
      {
        name: 'Lightning Pounce',
        damage: '40',
        energyCost: '2',
        description: 'A quick electric attack that rarely misses.',
      },
      {
        name: 'Quick Strike',
        damage: '20',
        energyCost: '1',
        description: 'A fast attack using sharp claws.',
      },
    ],
    description: 'A nimble feline with electric abilities. Its fur crackles with static energy.',
    cardNumber: '001',
    flippable: true,
    cardBackTitle: 'Electric Cat',
    cardBackSubtitle: 'Animal Kingdom',
  },
};

// Fire type Pokemon
export const Rare: Story = {
  args: {
    name: 'Flame Wolf',
    imageUrl: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=400&fit=crop&crop=face',
    rarity: CardRarity.RARE,
    type: PokemonType.FIRE,
    hp: 120,
    moves: [
      { name: 'Howling Flames', damage: 80, energyCost: 3 },
      { name: 'Pack Hunt', damage: 60, energyCost: 2 }
    ],
    description: 'A majestic wolf with the power to control fire. Leads its pack through burning forests.',
    flavorText: 'Its howl can ignite the very air around it.',
    artist: 'Wildlife Photographer',
    cardNumber: '002',
    setName: 'Animal Kingdom'
  },
};

// Water type Pokemon
export const Blastoise: Story = {
  args: {
    name: 'Blastoise',
    type: PokemonType.WATER,
    rarity: CardRarity.RARE,
    hp: 140,
    maxHp: 140,
    attack: 83,
    defense: 100,
    moves: [
      {
        name: 'Hydro Pump',
        damage: '80',
        energyCost: '3',
        description: 'Does 10 more damage for each Water Energy attached to this Pokémon.',
      },
      {
        name: 'Water Gun',
        damage: '40',
        energyCost: '2',
        description: 'A basic water attack.',
      },
    ],
    description: 'A brutal Pokémon with pressurized water jets on its shell. They are used for high speed tackles.',
    cardNumber: '009',
    flippable: true,
    cardBackTitle: 'Shellfish Pokémon',
    cardBackSubtitle: 'Generation I',
  },
};

// Grass type Pokemon
export const Venusaur: Story = {
  args: {
    name: 'Venusaur',
    type: PokemonType.GRASS,
    rarity: CardRarity.RARE,
    hp: 140,
    maxHp: 140,
    attack: 82,
    defense: 83,
    moves: [
      {
        name: 'Solar Beam',
        damage: '120',
        energyCost: '4',
        description: 'This attack can\'t be used during your next turn.',
      },
      {
        name: 'Vine Whip',
        damage: '30',
        energyCost: '2',
        description: 'A basic grass attack.',
      },
    ],
    description: 'The flower on its back releases a soothing scent that enhances emotions.',
    cardNumber: '003',
    flippable: true,
    cardBackTitle: 'Seed Pokémon',
    cardBackSubtitle: 'Generation I',
  },
};

// Ultra Rare Pokemon
export const MewTwo: Story = {
  args: {
    name: 'Mewtwo',
    type: PokemonType.PSYCHIC,
    rarity: CardRarity.RARE_HOLO,
    hp: 130,
    maxHp: 130,
    attack: 110,
    defense: 90,
    moves: [
      {
        name: 'Psystrike',
        damage: '120',
        energyCost: '3',
        description: 'This attack\'s damage isn\'t affected by any effects on your opponent\'s Active Pokémon.',
      },
      {
        name: 'Psychic',
        damage: '60',
        energyCost: '2',
        description: 'Does 10 more damage for each Energy attached to your opponent\'s Active Pokémon.',
      },
    ],
    description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
    cardNumber: '150',
    flippable: true,
    cardBackTitle: 'Genetic Pokémon',
    cardBackSubtitle: 'Generation I - Legendary',
  },
};

// Secret Rare Pokemon
export const ShinyCharizard: Story = {
  args: {
    name: 'Shiny Charizard',
    type: PokemonType.DRAGON,
    rarity: CardRarity.SECRET_RARE,
    hp: 180,
    maxHp: 180,
    attack: 150,
    defense: 120,
    moves: [
      {
        name: 'Dragon Pulse',
        damage: '130',
        energyCost: '3',
        description: 'Discard the top 2 cards of your deck.',
      },
      {
        name: 'Fire Blast',
        damage: '200',
        energyCost: '5',
        description: 'Discard 2 Energy attached to this Pokémon.',
      },
    ],
    description: 'A rare black Charizard with incredible power. Its flames burn hotter than any other Charizard.',
    cardNumber: '006★',
    flippable: true,
    cardBackTitle: 'Shining Pokémon',
    cardBackSubtitle: 'Ultra Rare',
  },
};

// Damaged Pokemon
export const DamagedPikachu: Story = {
  args: {
    name: 'Pikachu',
    type: PokemonType.ELECTRIC,
    rarity: CardRarity.COMMON,
    hp: 20,
    maxHp: 60,
    attack: 55,
    defense: 40,
    moves: [
      {
        name: 'Thunder Shock',
        damage: '20',
        energyCost: '1',
        description: 'Flip a coin. If tails, this attack does nothing.',
      },
    ],
    description: 'This Pikachu has taken some damage in battle.',
    cardNumber: '025',
    flippable: true,
    cardBackTitle: 'Electric Mouse Pokémon',
    cardBackSubtitle: 'Generation I - Damaged',
  },
};

// Simple card without moves
export const SimpleCard: Story = {
  args: {
    name: 'Magikarp',
    type: PokemonType.WATER,
    rarity: CardRarity.COMMON,
    hp: 30,
    maxHp: 30,
    attack: 10,
    defense: 55,
    description: 'In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.',
    cardNumber: '129',
    flippable: false,
  },
};

// Card showcase with multiple rarities
export const RarityShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        name="Common"
        type={PokemonType.NORMAL}
        rarity={CardRarity.COMMON}
        hp={50}
        attack={30}
        defense={30}
        cardNumber="001"
        flippable={true}
        cardBackTitle="Common Pokémon"
        cardBackSubtitle="Basic Rarity"
      />
      <Card
        name="Uncommon"
        type={PokemonType.FIGHTING}
        rarity={CardRarity.UNCOMMON}
        hp={70}
        attack={50}
        defense={40}
        cardNumber="002"
        flippable={true}
        cardBackTitle="Uncommon Pokémon"
        cardBackSubtitle="Enhanced Rarity"
      />
      <Card
        name="Rare"
        type={PokemonType.FIRE}
        rarity={CardRarity.RARE}
        hp={100}
        attack={80}
        defense={60}
        cardNumber="003"
        flippable={true}
        cardBackTitle="Rare Pokémon"
        cardBackSubtitle="Special Rarity"
      />
      <Card
        name="Ultra Rare"
        type={PokemonType.PSYCHIC}
        rarity={CardRarity.RARE_HOLO}
        hp={130}
        attack={110}
        defense={90}
        cardNumber="004"
        flippable={true}
        cardBackTitle="Ultra Rare Pokémon"
        cardBackSubtitle="Holographic Rarity"
      />
      <Card
        name="Secret Rare"
        type={PokemonType.DRAGON}
        rarity={CardRarity.SECRET_RARE}
        hp={180}
        attack={150}
        defense={120}
        cardNumber="005★"
        flippable={true}
        cardBackTitle="Secret Rare Pokémon"
        cardBackSubtitle="Ultimate Rarity"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all rarity levels from common to secret rare with flip functionality.',
      },
    },
  },
};

// Type showcase
export const TypeShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', maxWidth: '1200px' }}>
      <Card name="Fire Type" type={PokemonType.FIRE} rarity={CardRarity.COMMON} hp={80} attack={60} defense={50} cardNumber="F01" flippable={true} cardBackTitle="Fire Pokémon" cardBackSubtitle="Flame Type" />
      <Card name="Water Type" type={PokemonType.WATER} rarity={CardRarity.COMMON} hp={90} attack={50} defense={70} cardNumber="W01" flippable={true} cardBackTitle="Water Pokémon" cardBackSubtitle="Aqua Type" />
      <Card name="Grass Type" type={PokemonType.GRASS} rarity={CardRarity.COMMON} hp={70} attack={55} defense={65} cardNumber="G01" flippable={true} cardBackTitle="Grass Pokémon" cardBackSubtitle="Nature Type" />
      <Card name="Electric Type" type={PokemonType.ELECTRIC} rarity={CardRarity.COMMON} hp={60} attack={65} defense={45} cardNumber="E01" flippable={true} cardBackTitle="Electric Pokémon" cardBackSubtitle="Thunder Type" />
      <Card name="Psychic Type" type={PokemonType.PSYCHIC} rarity={CardRarity.UNCOMMON} hp={80} attack={70} defense={60} cardNumber="P01" flippable={true} cardBackTitle="Psychic Pokémon" cardBackSubtitle="Mind Type" />
      <Card name="Ice Type" type={PokemonType.ICE} rarity={CardRarity.UNCOMMON} hp={75} attack={60} defense={80} cardNumber="I01" flippable={true} cardBackTitle="Ice Pokémon" cardBackSubtitle="Frost Type" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different Pokemon types with their characteristic colors and flip functionality.',
      },
    },
  },
};

// Add a new story specifically for flip functionality
export const FlipShowcase: Story = {
  args: {
    name: 'Forest Guardian',
    imageUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400&h=400&fit=crop&crop=face',
    rarity: CardRarity.RARE_HOLO,
    type: PokemonType.GRASS,
    hp: 140,
    moves: [
      { name: 'Nature\'s Wrath', damage: 100, energyCost: 4 },
      { name: 'Bear Hug', damage: 60, energyCost: 2 }
    ],
    description: 'A powerful bear that protects the ancient forests. Its strength is legendary among woodland creatures.',
    flavorText: 'This gentle giant becomes fierce when its territory is threatened.',
    artist: 'Nature Photographer',
    cardNumber: '003',
    setName: 'Animal Kingdom',
    flippable: true,
    cardBackTitle: 'Forest Protector',
    cardBackSubtitle: 'Animal Kingdom Series'
  },
};

export const AnimalShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        name="Ocean Dolphin"
        imageUrl="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=face"
        type={PokemonType.WATER}
        rarity={CardRarity.UNCOMMON}
        hp={80}
        moves={[
          { name: 'Splash Wave', damage: 50, energyCost: 2 },
          { name: 'Sonic Burst', damage: 30, energyCost: 1 }
        ]}
        description="An intelligent marine mammal with psychic abilities. Can communicate telepathically."
        flavorText="Its clicks and whistles can be heard for miles underwater."
        artist="Marine Photographer"
        cardNumber="004"
        setName="Animal Kingdom"
        flippable={true}
        cardBackTitle="Ocean Intelligence"
        cardBackSubtitle="Animal Kingdom Series"
      />
      <Card
        name="Sky Eagle"
        imageUrl="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=400&fit=crop&crop=face"
        type={PokemonType.FLYING}
        rarity={CardRarity.RARE}
        hp={100}
        moves={[
          { name: 'Aerial Strike', damage: 70, energyCost: 3 },
          { name: 'Wind Gust', damage: 40, energyCost: 2 }
        ]}
        description="A majestic bird of prey with incredible eyesight. Rules the skies with grace and power."
        flavorText="Can spot prey from over a mile away."
        artist="Wildlife Photographer"
        cardNumber="005"
        setName="Animal Kingdom"
        flippable={true}
        cardBackTitle="Sky Ruler"
        cardBackSubtitle="Animal Kingdom Series"
      />
      <Card
        name="Arctic Fox"
        imageUrl="https://images.unsplash.com/photo-1605979399824-6d3de7b6b4b2?w=400&h=400&fit=crop&crop=face"
        type={PokemonType.ICE}
        rarity={CardRarity.COMMON}
        hp={60}
        moves={[
          { name: 'Frost Bite', damage: 35, energyCost: 2 },
          { name: 'Camouflage', damage: 0, energyCost: 1 }
        ]}
        description="A cunning fox adapted to harsh winter conditions. Its white fur provides perfect camouflage."
        flavorText="Changes coat color with the seasons."
        artist="Arctic Photographer"
        cardNumber="006"
        setName="Animal Kingdom"
        flippable={true}
        cardBackTitle="Winter Survivor"
        cardBackSubtitle="Animal Kingdom Series"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of various animal-themed cards with larger images. Click on any card to see its back side.',
      },
    },
  },
};