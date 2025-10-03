import React from 'react';
import { StyledDivider } from './styles';

export type DividerVariant = 'solid' | 'dashed' | 'dotted' | 'gradient' | 'decorative';
export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerThickness = 'thin' | 'medium' | 'thick';

export interface DividerProps {
  /**
   * The visual style of the divider
   */
  variant?: DividerVariant;
  /**
   * The orientation of the divider
   */
  orientation?: DividerOrientation;
  /**
   * The thickness of the divider
   */
  thickness?: DividerThickness;
  /**
   * Custom color for the divider
   */
  color?: string;
  /**
   * Spacing around the divider
   */
  spacing?: 'none' | 'small' | 'medium' | 'large';
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Custom content to display in the center of the divider
   */
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({
  variant = 'solid',
  orientation = 'horizontal',
  thickness = 'thin',
  color,
  spacing = 'medium',
  className,
  children,
  ...props
}) => {
  return (
    <StyledDivider
      variant={variant}
      orientation={orientation}
      thickness={thickness}
      color={color}
      spacing={spacing}
      hasContent={!!children}
      className={className}
      role="separator"
      {...props}
    >
      {children && (
        <span className="divider-content">
          {children}
        </span>
      )}
    </StyledDivider>
  );
};

export default Divider;