import styled, { css } from 'styled-components';
import { DividerVariant, DividerOrientation, DividerThickness } from './index';

const thicknessValues = {
  thin: '1px',
  medium: '2px',
  thick: '4px',
};

const spacingValues = {
  none: '0',
  small: '8px',
  medium: '16px',
  large: '24px',
};

const variantStyles = {
  solid: css<{ color?: string; thickness: DividerThickness }>`
    border-style: solid;
    border-color: ${props => props.color || '#dee2e6'};
  `,
  dashed: css<{ color?: string; thickness: DividerThickness }>`
    border-style: dashed;
    border-color: ${props => props.color || '#dee2e6'};
  `,
  dotted: css<{ color?: string; thickness: DividerThickness }>`
    border-style: dotted;
    border-color: ${props => props.color || '#dee2e6'};
  `,
  gradient: css<{ color?: string; thickness: DividerThickness }>`
    border: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${props => props.color || '#dee2e6'} 50%,
      transparent 100%
    );
  `,
  decorative: css<{ color?: string; thickness: DividerThickness }>`
    border: none;
    background: repeating-linear-gradient(
      90deg,
      ${props => props.color || '#dee2e6'} 0px,
      ${props => props.color || '#dee2e6'} 4px,
      transparent 4px,
      transparent 8px
    );
  `,
};

export const StyledDivider = styled.div<{
  variant: DividerVariant;
  orientation: DividerOrientation;
  thickness: DividerThickness;
  color?: string;
  spacing: string;
  hasContent: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  ${props => props.orientation === 'horizontal' && css`
    width: 100%;
    margin: ${spacingValues[props.spacing]} 0;
    
    ${props.hasContent ? css`
      &::before,
      &::after {
        content: '';
        flex: 1;
        height: ${thicknessValues[props.thickness]};
        ${variantStyles[props.variant]}
      }
      
      .divider-content {
        padding: 0 12px;
        background: white;
        color: #6c757d;
        font-size: 12px;
        font-weight: 500;
        white-space: nowrap;
      }
    ` : css`
      height: ${thicknessValues[props.thickness]};
      ${variantStyles[props.variant]}
      
      ${props.variant === 'solid' && css`
        border-top-width: ${thicknessValues[props.thickness]};
        border-left: none;
        border-right: none;
        border-bottom: none;
      `}
      
      ${props.variant === 'dashed' && css`
        border-top-width: ${thicknessValues[props.thickness]};
        border-left: none;
        border-right: none;
        border-bottom: none;
      `}
      
      ${props.variant === 'dotted' && css`
        border-top-width: ${thicknessValues[props.thickness]};
        border-left: none;
        border-right: none;
        border-bottom: none;
      `}
    `}
  `}
  
  ${props => props.orientation === 'vertical' && css`
    height: 100%;
    margin: 0 ${spacingValues[props.spacing]};
    flex-direction: column;
    
    ${props.hasContent ? css`
      &::before,
      &::after {
        content: '';
        flex: 1;
        width: ${thicknessValues[props.thickness]};
        ${variantStyles[props.variant]}
      }
      
      .divider-content {
        padding: 12px 0;
        background: white;
        color: #6c757d;
        font-size: 12px;
        font-weight: 500;
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }
    ` : css`
      width: ${thicknessValues[props.thickness]};
      ${variantStyles[props.variant]}
      
      ${props.variant === 'solid' && css`
        border-left-width: ${thicknessValues[props.thickness]};
        border-top: none;
        border-right: none;
        border-bottom: none;
      `}
      
      ${props.variant === 'dashed' && css`
        border-left-width: ${thicknessValues[props.thickness]};
        border-top: none;
        border-right: none;
        border-bottom: none;
      `}
      
      ${props.variant === 'dotted' && css`
        border-left-width: ${thicknessValues[props.thickness]};
        border-top: none;
        border-right: none;
        border-bottom: none;
      `}
      
      ${props.variant === 'gradient' && css`
        background: linear-gradient(
          180deg,
          transparent 0%,
          ${props.color || '#dee2e6'} 50%,
          transparent 100%
        );
      `}
      
      ${props.variant === 'decorative' && css`
        background: repeating-linear-gradient(
          180deg,
          ${props.color || '#dee2e6'} 0px,
          ${props.color || '#dee2e6'} 4px,
          transparent 4px,
          transparent 8px
        );
      `}
    `}
  `}
`;