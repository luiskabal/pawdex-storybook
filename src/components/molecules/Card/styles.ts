import styled, { keyframes, css } from 'styled-components';
import { CardRarity, PokemonType } from './index';

// Animations
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const holographic = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const holoShimmer = keyframes`
  0% { 
    background-position: -200% 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% { 
    background-position: 200% 0;
    opacity: 0;
  }
`;

const rainbowShift = keyframes`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); }
`;

const cardBackShimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const pokeBallRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Type colors
const typeColors = {
  fire: '#FF6B35',
  water: '#4A90E2',
  grass: '#7ED321',
  electric: '#F5A623',
  psychic: '#BD10E0',
  ice: '#50E3C2',
  dragon: '#9013FE',
  dark: '#4A4A4A',
  fighting: '#D0021B',
  poison: '#B8E986',
  ground: '#F8E71C',
  flying: '#E3F2FD',
  bug: '#8BC34A',
  rock: '#8D6E63',
  ghost: '#9C27B0',
  steel: '#607D8B',
  fairy: '#F48FB1',
  normal: '#9E9E9E',
};

// Rarity effects
const rarityEffects = {
  common: css``,
  uncommon: css`
    border: 2px solid #C0C0C0;
  `,
  rare: css`
    border: 2px solid #FFD700;
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
      border-radius: 16px;
      z-index: -1;
      animation: ${shimmer} 2s infinite;
    }
  `,
  'ultra-rare': css`
    border: 2px solid #FF6B35;
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #FF6B35, #FF8E53, #FF6B35, #FFB74D);
      border-radius: 16px;
      z-index: -1;
      animation: ${holographic} 3s infinite;
    }
    animation: ${glow} 2s infinite;
  `,
  'secret-rare': css`
    border: 2px solid #9C27B0;
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, #9C27B0, #E91E63, #2196F3, #4CAF50, #FFEB3B, #FF9800, #9C27B0);
      background-size: 400% 400%;
      border-radius: 16px;
      z-index: -1;
      animation: ${holographic} 2s infinite;
    }
    animation: ${glow} 1.5s infinite;
  `,
};

export const CardBackground = styled.div<{ rarity: CardRarity; type: PokemonType }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 14px;
  opacity: 0.1;
  background: linear-gradient(135deg, ${props => typeColors[props.type]}, transparent);
  z-index: -2;
`;

// Flip container for 3D flip effect
export const HolographicOverlay = styled.div<{
  isClickHolding: boolean;
  mousePosition?: { x: number; y: number };
  rarity?: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  pointer-events: none;
  opacity: ${props => props.isClickHolding ? 1 : 0};
  transition: ${props => props.isClickHolding ? 'none' : 'opacity 0.3s ease'};
  z-index: 10;
  
  background: ${props => {
    if (!props.isClickHolding || !props.mousePosition) return 'transparent';
    
    const { x, y } = props.mousePosition;
    const centerX = 50 + (x * 40); // Enhanced gradient shift for click-hold
    const centerY = 50 + (y * 40);
    
    // Enhanced intensity for click-hold effect
    const intensityMultiplier = 2;
    
    // Different holographic effects based on rarity
    if (props.rarity === 'legendary' || props.rarity === 'mythic') {
      return `
        radial-gradient(
          circle at ${centerX}% ${centerY}%, 
          rgba(255, 215, 0, ${0.5 * intensityMultiplier}) 0%,
          rgba(255, 105, 180, ${0.4 * intensityMultiplier}) 25%,
          rgba(138, 43, 226, ${0.4 * intensityMultiplier}) 50%,
          rgba(0, 191, 255, ${0.3 * intensityMultiplier}) 75%,
          transparent 100%
        ),
        linear-gradient(
          ${45 + (x * 120)}deg,
          transparent 20%,
          rgba(255, 255, 255, ${0.8 * intensityMultiplier}) 50%,
          transparent 80%
        )
      `;
    } else if (props.rarity === 'rare') {
      return `
        radial-gradient(
          circle at ${centerX}% ${centerY}%, 
          rgba(0, 191, 255, ${0.4 * intensityMultiplier}) 0%,
          rgba(138, 43, 226, ${0.3 * intensityMultiplier}) 50%,
          transparent 100%
        ),
        linear-gradient(
          ${45 + (x * 80)}deg,
          transparent 30%,
          rgba(255, 255, 255, ${0.6 * intensityMultiplier}) 50%,
          transparent 70%
        )
      `;
    } else {
      return `
        linear-gradient(
          ${45 + (x * 60)}deg,
          transparent 40%,
          rgba(255, 255, 255, ${0.3 * intensityMultiplier}) 50%,
          transparent 60%
        )
      `;
    }
  }};
  
  ${props => props.isHovering && (props.rarity === 'legendary' || props.rarity === 'mythic') && css`
    animation: ${rainbowShift} 3s linear infinite;
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.8) 50%,
      transparent 70%
    );
    background-size: 200% 200%;
    animation: ${props => props.isHovering ? css`${holoShimmer} 2s ease-in-out infinite` : 'none'};
    opacity: ${props => props.isHovering ? 0.6 : 0};
  }
`;

export const FlipContainer = styled.div<{ 
  isFlipped: boolean; 
  clickable: boolean;
  isClickHolding?: boolean;
  mousePosition?: { x: number; y: number };
}>`
  position: relative;
  width: 280px;
  height: 450px;
  perspective: 1000px;
  transition: ${props => props.isClickHolding ? 'none' : 'transform 0.3s ease-out'};
  transform: ${props => {
    // Holographic rotation effects
    if (props.isClickHolding && props.mousePosition) {
      const { x, y } = props.mousePosition;
      
      // Apply limits to prevent excessive flipping
      const maxRotation = 8; // Reduced from 15 to 8 degrees for more subtle effect
      const rotateY = Math.max(-maxRotation, Math.min(maxRotation, x * maxRotation));
      const rotateX = Math.max(-maxRotation, Math.min(maxRotation, -y * maxRotation));
      
      const translateY = -12; // Enhanced lift effect
      const scale = 1.05; // Enhanced scale
      
      return `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px) scale(${scale})`;
    }
    
    return 'none';
  }};
  z-index: ${props => props.isClickHolding ? 1000 : 'auto'};
  user-select: none;

  ${props => props.clickable && css`
    cursor: pointer;

    &:hover {
      cursor: pointer;
    }

    &:active {
      cursor: pointer;
    }
  `}

  ${props => props.isClickHolding && css`
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  `}
`;

export const FlipInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
`;

export const StyledCard = styled(CardFace)<{ 
  rarity: CardRarity; 
  type: PokemonType; 
}>`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 16px;

  ${props => rarityEffects[props.rarity]}
`;

export const CardBack = styled(CardFace)<{ 
  rarity: CardRarity; 
  type: PokemonType; 
}>`
  background: linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #1a237e 100%);
  border: 2px solid #ffd700;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${cardBackShimmer} 3s infinite;
  }

  ${props => props.rarity === 'ultra-rare' && css`
    border-color: #ff6b35;
    background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 50%, #ff6b35 100%);
  `}

  ${props => props.rarity === 'secret-rare' && css`
    border-color: #9c27b0;
    background: linear-gradient(135deg, #9c27b0 0%, #e91e63 25%, #2196f3 50%, #4caf50 75%, #9c27b0 100%);
    background-size: 400% 400%;
    animation: ${holographic} 3s infinite;
  `}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  line-height: 1.2;
`;

export const CardSubtitle = styled.div`
  margin-top: 4px;
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StatsSection = styled.div`
  margin: 12px 0;
  padding: 8px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
`;

export const MovesSection = styled.div`
  margin: 12px 0;
`;

export const Move = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  border-left: 3px solid #ddd;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardFooter = styled.div`
  margin-top: auto;
  padding-top: 8px;
`;

export const RaritySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Card Back Elements
export const PokeBall = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ff0000 0%, #ff0000 45%, #000000 45%, #000000 55%, #ffffff 55%, #ffffff 100%);
  border: 4px solid #333;
  position: relative;
  margin-bottom: 20px;
  animation: ${pokeBallRotate} 4s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #333;
    border-radius: 50%;
    border: 3px solid #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: #333;
    transform: translateY(-50%);
  }
`;

export const CardBackTitle = styled.h2`
  color: #ffd700;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Arial', sans-serif;
`;

export const CardBackSubtitle = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.9;
`;

export const CardBackPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
  background-size: 40px 40px;
  z-index: -1;
`;