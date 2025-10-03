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

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4); }
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

export const StyledCard = styled.div<{ 
  rarity: CardRarity; 
  type: PokemonType; 
  clickable: boolean;
}>`
  position: relative;
  width: 280px;
  height: 400px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: all 0.3s ease;
  overflow: hidden;
  
  ${props => rarityEffects[props.rarity]}
  
  ${props => props.clickable && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
      transform: translateY(-2px);
    }
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