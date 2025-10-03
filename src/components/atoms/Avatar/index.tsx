import React from 'react';
import { StyledAvatar, AvatarImage, AvatarFallback, AvatarBorder } from './styles';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xl' | 'xxl';
export type AvatarVariant = 'circular' | 'rounded' | 'square';
export type AvatarRarity = 'common' | 'uncommon' | 'rare' | 'ultra-rare' | 'secret-rare';

export interface AvatarProps {
  /**
   * The source URL of the image
   */
  src?: string;
  /**
   * Alternative text for the image
   */
  alt?: string;
  /**
   * The size of the avatar
   */
  size?: AvatarSize;
  /**
   * The shape variant of the avatar
   */
  variant?: AvatarVariant;
  /**
   * The rarity level for special border effects
   */
  rarity?: AvatarRarity;
  /**
   * Fallback content when image fails to load
   */
  fallback?: React.ReactNode;
  /**
   * Whether the avatar should be clickable
   */
  clickable?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'medium',
  variant = 'circular',
  rarity,
  fallback,
  clickable = false,
  className,
  onClick,
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const showFallback = !src || imageError;

  return (
    <StyledAvatar
      size={size}
      variant={variant}
      rarity={rarity}
      clickable={clickable || !!onClick}
      className={className}
      onClick={onClick}
      {...props}
    >
      {rarity && <AvatarBorder rarity={rarity} />}
      
      {!showFallback && (
        <AvatarImage
          src={src}
          alt={alt}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loaded={imageLoaded}
        />
      )}
      
      {showFallback && (
        <AvatarFallback size={size}>
          {fallback || (
            <svg
              width="50%"
              height="50%"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          )}
        </AvatarFallback>
      )}
    </StyledAvatar>
  );
};

export default Avatar;