import React, { useState, useCallback, useEffect, useRef } from 'react';
import Avatar from '../../atoms/Avatar';
import ProgressBar from '../../atoms/ProgressBar';
import Badge from '../../atoms/Badge';
import Divider from '../../atoms/Divider';
import {
  FlipContainer,
  FlipInner,
  StyledCard,
  CardBack,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  StatsSection,
  MovesSection,
  Move,
  CardFooter,
  RaritySection,
  PokeBall,
  CardBackTitle,
  CardBackSubtitle,
  CardBackPattern,
  CardBackground,
  HolographicOverlay,
} from './styles';

export enum CardRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  RARE_HOLO = 'ultra-rare',
  SECRET_RARE = 'secret-rare',
}

export enum PokemonType {
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  PSYCHIC = 'psychic',
  ICE = 'ice',
  DRAGON = 'dragon',
  DARK = 'dark',
  FIGHTING = 'fighting',
  POISON = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  STEEL = 'steel',
  FAIRY = 'fairy',
  NORMAL = 'normal',
}

export interface MoveData {
  name: string;
  damage?: number;
  energyCost?: number;
  description?: string;
}

export interface CardProps {
  /**
   * Pokemon name
   */
  name: string;
  /**
   * Pokemon image URL
   */
  imageUrl?: string;
  /**
   * Pokemon type
   */
  type: PokemonType;
  /**
   * Card rarity level
   */
  rarity?: CardRarity;
  /**
   * Current HP
   */
  hp: number;
  /**
   * Maximum HP (defaults to current HP if not provided)
   */
  maxHp?: number;
  /**
   * Attack stat
   */
  attack?: number;
  /**
   * Defense stat
   */
  defense?: number;
  /**
   * Pokemon moves
   */
  moves?: MoveData[];
  /**
   * Pokemon description
   */
  description?: string;
  /**
   * Card number
   */
  cardNumber?: string;
  /**
   * Whether the card is clickable
   */
  clickable?: boolean;
  /**
   * Whether the card can be flipped
   */
  flippable?: boolean;
  /**
   * Whether the card starts flipped
   */
  initiallyFlipped?: boolean;
  /**
   * Custom card back title
   */
  cardBackTitle?: string;
  /**
   * Custom card back subtitle
   */
  cardBackSubtitle?: string;
  /**
   * Additional CSS class
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Flip handler
   */
  onFlip?: (isFlipped: boolean) => void;
}

const Card: React.FC<CardProps> = ({
  name,
  imageUrl,
  type,
  rarity = CardRarity.COMMON,
  hp,
  maxHp,
  attack,
  defense,
  moves = [],
  description,
  cardNumber,
  clickable = false,
  flippable = false,
  initiallyFlipped = false,
  cardBackTitle = "Pokémon TCG",
  cardBackSubtitle = "Trading Card Game",
  className,
  onClick,
  onFlip,
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(initiallyFlipped);
  // Holographic effect states
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Drag states
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const displayMaxHp = maxHp || hp;

  const handleCardClick = () => {
    if (isDragging) return;
    
    if (flippable) {
      const newFlippedState = !isFlipped;
      setIsFlipped(newFlippedState);
      onFlip?.(newFlippedState);
    }
    onClick?.();
  };

  // Combined holographic and drag handlers
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    setMousePosition({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  // Drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    setIsDragging(true);
    setDragOffset({ x: offsetX, y: offsetY });
    e.preventDefault();
  }, []);

  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    
    setDragPosition({ x: newX, y: newY });
  }, [isDragging, dragOffset]);

  const handleGlobalMouseUp = useCallback(() => {
     if (isDragging) {
       setIsDragging(false);
       setDragPosition({ x: 0, y: 0 });
     }
   }, [isDragging]);

   // Global mouse events for dragging
   useEffect(() => {
     if (isDragging) {
       document.addEventListener('mousemove', handleGlobalMouseMove);
       document.addEventListener('mouseup', handleGlobalMouseUp);
       
       return () => {
         document.removeEventListener('mousemove', handleGlobalMouseMove);
         document.removeEventListener('mouseup', handleGlobalMouseUp);
       };
     }
   }, [isDragging, handleGlobalMouseMove, handleGlobalMouseUp]);

   return (
    <FlipContainer
      ref={cardRef}
      isFlipped={isFlipped}
      clickable={clickable || flippable || !!onClick}
      className={className}
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      isHovering={isHovering}
      mousePosition={mousePosition}
      isDragging={isDragging}
      dragPosition={dragPosition}
      {...props}
    >
      <HolographicOverlay
          isHovering={isHovering}
          mousePosition={mousePosition}
          rarity={rarity}
          isDragging={isDragging}
        />
      <FlipInner isFlipped={isFlipped}>
        {/* Card Front */}
        <StyledCard rarity={rarity} type={type}>
          <CardBackground rarity={rarity} type={type} />
          
          <CardHeader>
            <div>
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>
                <Badge variant={type} size="small">{type}</Badge>
              </CardSubtitle>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#666' }}>HP</span>
              <Badge variant={type} size="medium">{hp}</Badge>
            </div>
          </CardHeader>

          <CardBody>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Avatar
                src={imageUrl}
                alt={name}
                size="xxl"
                variant="rounded"
                rarity={rarity}
              />
            </div>

            {(attack !== undefined || defense !== undefined) && (
              <>
                <Divider variant="gradient">Stats</Divider>
                <StatsSection>
                  <div style={{ marginBottom: '8px' }}>
                    <ProgressBar
                      value={hp}
                      max={displayMaxHp}
                      variant="hp"
                      size="medium"
                      label={`${hp}/${displayMaxHp} HP`}
                    />
                  </div>
                  {attack !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', color: '#666' }}>Attack:</span>
                      <Badge variant={type} size="small">{attack}</Badge>
                    </div>
                  )}
                  {defense !== undefined && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: '#666' }}>Defense:</span>
                      <Badge variant={type} size="small">{defense}</Badge>
                    </div>
                  )}
                </StatsSection>
              </>
            )}

            {moves.length > 0 && (
              <>
                <Divider>Moves</Divider>
                <MovesSection>
                  {moves.map((move, index) => (
                    <Move key={index}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '12px' }}>{move.name}</span>
                        {move.damage && (
                          <Badge variant={type} size="small">{move.damage}</Badge>
                        )}
                      </div>
                      {move.energyCost && (
                        <div style={{ fontSize: '10px', color: '#666', marginBottom: '2px' }}>
                          Energy Cost: {move.energyCost}
                        </div>
                      )}
                      {move.description && (
                        <div style={{ fontSize: '10px', color: '#666', fontStyle: 'italic' }}>
                          {move.description}
                        </div>
                      )}
                    </Move>
                  ))}
                </MovesSection>
              </>
            )}

            {description && (
              <>
                <Divider variant="decorative" />
                <div style={{ 
                  fontSize: '11px', 
                  color: '#666', 
                  fontStyle: 'italic', 
                  textAlign: 'center',
                  lineHeight: '1.4',
                  margin: '12px 0'
                }}>
                  {description}
                </div>
              </>
            )}
          </CardBody>

          <CardFooter>
            <RaritySection>
              <Badge variant={type} rarity={rarity} size="small">
                {rarity.replace('-', ' ')}
              </Badge>
              {cardNumber && (
                <span style={{ fontSize: '10px', color: '#666' }}>
                  #{cardNumber}
                </span>
              )}
            </RaritySection>
          </CardFooter>
      </StyledCard>

      {/* Card Back */}
      <CardBack rarity={rarity} type={type}>
        <CardBackPattern />
        <PokeBall />
        <CardBackTitle>{cardBackTitle}</CardBackTitle>
        <CardBackSubtitle>{cardBackSubtitle}</CardBackSubtitle>
      </CardBack>
    </FlipInner>
  </FlipContainer>
  );
};

export default Card;