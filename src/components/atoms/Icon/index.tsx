import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Home,
  Person,
  Settings,
  Search,
  Favorite,
  Star,
  Delete,
  Edit,
  Add,
  Remove,
  Check,
  Close,
  ArrowBack,
  ArrowForward,
  ExpandMore,
  ExpandLess,
  Menu,
  MoreVert,
  Visibility,
  VisibilityOff,
  Download,
  Upload,
  Share,
  Print,
  Email,
  Phone,
  LocationOn,
  DateRange,
  AccessTime,
  Warning,
  Error,
  Info,
  CheckCircle,
} from '@mui/icons-material';

// Icon mapping for easy access
const iconMap = {
  home: Home,
  person: Person,
  settings: Settings,
  search: Search,
  favorite: Favorite,
  star: Star,
  delete: Delete,
  edit: Edit,
  add: Add,
  remove: Remove,
  check: Check,
  close: Close,
  arrowBack: ArrowBack,
  arrowForward: ArrowForward,
  expandMore: ExpandMore,
  expandLess: ExpandLess,
  menu: Menu,
  moreVert: MoreVert,
  visibility: Visibility,
  visibilityOff: VisibilityOff,
  download: Download,
  upload: Upload,
  share: Share,
  print: Print,
  email: Email,
  phone: Phone,
  locationOn: LocationOn,
  dateRange: DateRange,
  accessTime: AccessTime,
  warning: Warning,
  error: Error,
  info: Info,
  checkCircle: CheckCircle,
} as const;

export type IconName = keyof typeof iconMap;

export interface IconProps extends Omit<SvgIconProps, 'color'> {
  /**
   * The name of the icon to display
   */
  name?: IconName;
  /**
   * The size of the icon
   */
  size?: 'small' | 'medium' | 'large' | number;
  /**
   * The color of the icon
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled' | 'success' | 'warning' | 'info';
  /**
   * Custom icon component to render instead of predefined icons
   */
  component?: React.ComponentType<SvgIconProps>;
}

const StyledIcon = styled(SvgIcon)<{ iconSize?: 'small' | 'medium' | 'large' | number }>(
  ({ theme, iconSize }) => ({
    transition: theme.transitions.create(['color', 'transform']),
    
    ...(typeof iconSize === 'string' && {
      fontSize: {
        small: '1.25rem',
        medium: '1.5rem',
        large: '2rem',
      }[iconSize],
    }),
    
    ...(typeof iconSize === 'number' && {
      fontSize: `${iconSize}px`,
      width: `${iconSize}px`,
      height: `${iconSize}px`,
    }),
    
    '&:hover': {
      transform: 'scale(1.1)',
    },
    
    '&.MuiSvgIcon-colorPrimary': {
      color: theme.palette.primary.main,
    },
    
    '&.MuiSvgIcon-colorSecondary': {
      color: theme.palette.secondary.main,
    },
    
    '&.MuiSvgIcon-colorError': {
      color: theme.palette.error.main,
    },
    
    '&.MuiSvgIcon-colorWarning': {
      color: theme.palette.warning.main,
    },
    
    '&.MuiSvgIcon-colorInfo': {
      color: theme.palette.info.main,
    },
    
    '&.MuiSvgIcon-colorSuccess': {
      color: theme.palette.success.main,
    },
    
    '&.MuiSvgIcon-colorAction': {
      color: theme.palette.action.active,
    },
    
    '&.MuiSvgIcon-colorDisabled': {
      color: theme.palette.action.disabled,
    },
  })
);

/**
 * Icon component wrapper for Material UI icons with predefined icon set and custom styling
 */
const Icon: React.FC<IconProps> = ({ 
  name,
  size = 'medium',
  color = 'inherit',
  component,
  children,
  ...props 
}) => {
  // Determine which icon component to use
  let IconComponent: React.ComponentType<SvgIconProps>;
  
  if (component) {
    IconComponent = component;
  } else if (name && iconMap[name]) {
    IconComponent = iconMap[name];
  } else {
    // Fallback to a default icon or render children
    IconComponent = SvgIcon;
  }

  return (
    <StyledIcon
      as={IconComponent}
      color={color}
      iconSize={size}
      {...props}
    >
      {children}
    </StyledIcon>
  );
};

export default Icon;
export { iconMap };