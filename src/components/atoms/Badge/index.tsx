import React from 'react';
import { StyledBadge } from './styles';

export type BadgeVariant = 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fighting' | 'poison' | 'ground' | 'flying' | 'bug' | 'rock' | 'ghost' | 'steel' | 'fairy' | 'normal';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeRarity = 'common' | 'uncommon' | 'rare' | 'ultra-rare' | 'secret-rare';

export interface BadgeProps {
  /**
   * The variant/type of the badge
   */
  variant?: BadgeVariant;
  /**
   * The size of the badge
   */
  size?: BadgeSize;
  /**
   * The rarity level for special styling
   */
  rarity?: BadgeRarity;
  /**
   * The content to display in the badge
   */
  children: React.ReactNode;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'normal',
  size = 'medium',
  rarity,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <StyledBadge
      variant={variant}
      size={size}
      rarity={rarity}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge;