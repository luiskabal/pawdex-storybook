import styled, { css, keyframes } from 'styled-components';
import { AvatarSize, AvatarVariant, AvatarRarity } from './index';

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const holographic = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 215, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
`;

const sizeStyles = {
  small: css`
    width: 32px;
    height: 32px;
  `,
  medium: css`
    width: 48px;
    height: 48px;
  `,
  large: css`
    width: 64px;
    height: 64px;
  `,
  xl: css`
    width: 96px;
    height: 96px;
  `,
  xxl: css`
    width: 140px;
    height: 140px;
  `,
};

const variantStyles = {
  circular: css`
    border-radius: 50%;
  `,
  rounded: css`
    border-radius: 12px;
  `,
  square: css`
    border-radius: 4px;
  `,
};

const rarityBorders = {
  common: css`
    border: 2px solid #dee2e6;
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
    border: 3px solid #6f42c1;
    box-shadow: 0 0 16px rgba(111, 66, 193, 0.5);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: inherit;
      background: linear-gradient(45deg, #6f42c1, #e83e8c, #6f42c1);
      background-size: 200% 200%;
      animation: ${holographic} 3s ease infinite;
      z-index: -1;
    }
  `,
  'secret-rare': css`
    border: 3px solid #ffd700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    animation: ${pulse} 2s infinite;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: inherit;
      background: linear-gradient(
        90deg,
        #ffd700,
        #ffed4e,
        #ffd700
      );
      background-size: 200% 100%;
      animation: ${shimmer} 2s infinite;
      z-index: -1;
    }
  `,
};

export const StyledAvatar = styled.div<{
  size: AvatarSize;
  variant: AvatarVariant;
  rarity?: AvatarRarity;
  clickable: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f8f9fa;
  color: #6c757d;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  transition: all 0.2s ease-in-out;
  
  ${props => sizeStyles[props.size]}
  ${props => variantStyles[props.variant]}
  ${props => props.rarity && rarityBorders[props.rarity]}
  
  ${props => props.clickable && css`
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    &:active {
      transform: translateY(0);
    }
  `}
`;

export const AvatarImage = styled.img<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => props.loaded ? 1 : 0};
`;

export const AvatarFallback = styled.div<{ size: AvatarSize }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
  color: #6c757d;
  font-weight: 600;
  
  ${props => props.size === 'small' && css`
    font-size: 10px;
  `}
  
  ${props => props.size === 'medium' && css`
    font-size: 12px;
  `}
  
  ${props => props.size === 'large' && css`
    font-size: 14px;
  `}
  
  ${props => props.size === 'xl' && css`
    font-size: 18px;
  `}
  
  ${props => props.size === 'xxl' && css`
    font-size: 24px;
  `}
`;

export const AvatarBorder = styled.div<{ rarity: AvatarRarity }>`
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  z-index: -1;
  
  ${props => props.rarity === 'ultra-rare' && css`
    background: linear-gradient(45deg, #6f42c1, #e83e8c, #6f42c1);
    background-size: 200% 200%;
    animation: ${holographic} 3s ease infinite;
  `}
  
  ${props => props.rarity === 'secret-rare' && css`
    background: linear-gradient(90deg, #ffd700, #ffed4e, #ffd700);
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
  `}
`;