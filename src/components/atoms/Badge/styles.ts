import styled, { css, keyframes } from 'styled-components';
import { BadgeVariant, BadgeSize, BadgeRarity } from './index';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const holographic = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const typeColors = {
  fire: '#FF6B35',
  water: '#4A90E2',
  grass: '#7ED321',
  electric: '#F5A623',
  psychic: '#D63384',
  ice: '#87CEEB',
  dragon: '#6F42C1',
  dark: '#343A40',
  fighting: '#DC3545',
  poison: '#6F2DA8',
  ground: '#8B4513',
  flying: '#87CEEB',
  bug: '#28A745',
  rock: '#6C757D',
  ghost: '#6F42C1',
  steel: '#ADB5BD',
  fairy: '#E83E8C',
  normal: '#6C757D',
};

const sizeStyles = {
  small: css`
    padding: 2px 6px;
    font-size: 10px;
    border-radius: 8px;
    min-width: 24px;
    height: 16px;
  `,
  medium: css`
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 10px;
    min-width: 32px;
    height: 20px;
  `,
  large: css`
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 12px;
    min-width: 48px;
    height: 28px;
  `,
};

const rarityStyles = {
  common: css`
    border: 1px solid #dee2e6;
  `,
  uncommon: css`
    border: 2px solid #28a745;
    box-shadow: 0 0 8px rgba(40, 167, 69, 0.3);
  `,
  rare: css`
    border: 2px solid #007bff;
    box-shadow: 0 0 12px rgba(0, 123, 255, 0.4);
  `,
  'ultra-rare': css`
    border: 2px solid #6f42c1;
    box-shadow: 0 0 16px rgba(111, 66, 193, 0.5);
    background: linear-gradient(45deg, ${props => typeColors[props.variant || 'normal']}, #6f42c1);
    background-size: 200% 200%;
    animation: ${holographic} 3s ease infinite;
  `,
  'secret-rare': css`
    border: 2px solid #ffd700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    background: linear-gradient(
      90deg,
      ${props => typeColors[props.variant || 'normal']},
      #ffd700,
      ${props => typeColors[props.variant || 'normal']}
    );
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
  `,
};

export const StyledBadge = styled.div<{
  variant: BadgeVariant;
  size: BadgeSize;
  rarity?: BadgeRarity;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition: all 0.2s ease-in-out;
  user-select: none;
  
  ${props => sizeStyles[props.size]}
  
  ${props => !props.rarity && css`
    background-color: ${typeColors[props.variant]};
    border: 1px solid ${typeColors[props.variant]};
  `}
  
  ${props => props.rarity && rarityStyles[props.rarity]}
  
  &:hover {
    transform: ${props => props.onClick ? 'translateY(-1px)' : 'none'};
    box-shadow: ${props => props.onClick ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'inherit'};
  }
  
  &:active {
    transform: ${props => props.onClick ? 'translateY(0)' : 'none'};
  }
`;