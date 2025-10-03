import styled, { css, keyframes } from 'styled-components';
import { ProgressBarVariant, ProgressBarSize } from './index';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

const fillAnimation = keyframes`
  from { width: 0%; }
  to { width: var(--target-width); }
`;

const variantColors = {
  hp: {
    background: '#e9ecef',
    fill: '#28a745',
    fillLow: '#dc3545',
    fillMedium: '#ffc107',
    border: '#dee2e6',
  },
  exp: {
    background: '#e3f2fd',
    fill: '#2196f3',
    fillLow: '#2196f3',
    fillMedium: '#2196f3',
    border: '#bbdefb',
  },
  energy: {
    background: '#fff3e0',
    fill: '#ff9800',
    fillLow: '#ff5722',
    fillMedium: '#ff9800',
    border: '#ffcc02',
  },
  damage: {
    background: '#ffebee',
    fill: '#f44336',
    fillLow: '#f44336',
    fillMedium: '#f44336',
    border: '#ffcdd2',
  },
};

const sizeStyles = {
  small: css`
    height: 8px;
    border-radius: 4px;
  `,
  medium: css`
    height: 12px;
    border-radius: 6px;
  `,
  large: css`
    height: 16px;
    border-radius: 8px;
  `,
};

const labelSizeStyles = {
  small: css`
    font-size: 10px;
    padding: 0 4px;
  `,
  medium: css`
    font-size: 12px;
    padding: 0 6px;
  `,
  large: css`
    font-size: 14px;
    padding: 0 8px;
  `,
};

export const StyledProgressBar = styled.div<{
  variant: ProgressBarVariant;
  size: ProgressBarSize;
}>`
  position: relative;
  width: 100%;
  background-color: ${props => variantColors[props.variant].background};
  border: 1px solid ${props => variantColors[props.variant].border};
  overflow: hidden;
  
  ${props => sizeStyles[props.size]}
`;

export const ProgressFill = styled.div<{
  variant: ProgressBarVariant;
  percentage: number;
  animated: boolean;
  value: number;
  max: number;
}>`
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width 0.3s ease-in-out;
  position: relative;
  
  ${props => {
    const ratio = props.value / props.max;
    let fillColor = variantColors[props.variant].fill;
    
    if (props.variant === 'hp') {
      if (ratio <= 0.25) {
        fillColor = variantColors[props.variant].fillLow;
      } else if (ratio <= 0.5) {
        fillColor = variantColors[props.variant].fillMedium;
      }
    }
    
    return css`
      background-color: ${fillColor};
    `;
  }}
  
  ${props => props.animated && css`
    animation: ${fillAnimation} 1s ease-out;
    --target-width: ${props.percentage}%;
  `}
  
  ${props => props.variant === 'hp' && props.value / props.max <= 0.25 && css`
    animation: ${pulse} 1s infinite;
  `}
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: ${props => props.animated ? css`${fillAnimation} 2s infinite` : 'none'};
  }
`;

export const ProgressLabel = styled.div<{
  variant: ProgressBarVariant;
  size: ProgressBarSize;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  color: ${props => props.variant === 'hp' ? '#fff' : '#333'};
  text-shadow: ${props => props.variant === 'hp' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : 'none'};
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
  
  ${props => labelSizeStyles[props.size]}
`;