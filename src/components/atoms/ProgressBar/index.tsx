import React from 'react';
import { StyledProgressBar, ProgressFill, ProgressLabel } from './styles';

export type ProgressBarVariant = 'hp' | 'exp' | 'energy' | 'damage';
export type ProgressBarSize = 'small' | 'medium' | 'large';

export interface ProgressBarProps {
  /**
   * Current value of the progress
   */
  value: number;
  /**
   * Maximum value of the progress
   */
  max: number;
  /**
   * Minimum value of the progress
   */
  min?: number;
  /**
   * The variant/type of the progress bar
   */
  variant?: ProgressBarVariant;
  /**
   * The size of the progress bar
   */
  size?: ProgressBarSize;
  /**
   * Whether to show the label with current/max values
   */
  showLabel?: boolean;
  /**
   * Custom label text
   */
  label?: string;
  /**
   * Whether to animate the progress fill
   */
  animated?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  min = 0,
  variant = 'hp',
  size = 'medium',
  showLabel = true,
  label,
  animated = true,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);
  const displayLabel = label || `${value}/${max}`;

  return (
    <StyledProgressBar
      variant={variant}
      size={size}
      className={className}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label={`${variant} progress: ${displayLabel}`}
      {...props}
    >
      <ProgressFill
        variant={variant}
        percentage={percentage}
        animated={animated}
        value={value}
        max={max}
      />
      {showLabel && (
        <ProgressLabel variant={variant} size={size}>
          {displayLabel}
        </ProgressLabel>
      )}
    </StyledProgressBar>
  );
};

export default ProgressBar;