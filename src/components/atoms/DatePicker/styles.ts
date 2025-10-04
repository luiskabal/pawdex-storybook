import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Pet-themed pastel colors for DatePicker
const petDatePickerColors = {
  primary: '#FFB6C1',      // Light pink
  secondary: '#E6E6FA',    // Lavender
  accent: '#F0E68C',       // Khaki
  success: '#98FB98',      // Pale green
  warning: '#FFEAA7',      // Peach
  error: '#FFB3BA',        // Light coral
  background: '#F0F8FF',   // Alice blue
  border: '#DDA0DD',       // Plum
  text: '#696969',         // Dim gray
  placeholder: '#B0B0B0',  // Silver
  calendarIcon: '#DA70D6'  // Orchid
};

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: petDatePickerColors.background,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(221, 160, 221, 0.1)',
    
    '& fieldset': {
      borderColor: petDatePickerColors.border,
      borderWidth: '2px',
    },
    
    '&:hover': {
      backgroundColor: '#F5F5FF', // Ghost white
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(221, 160, 221, 0.2)',
      
      '& fieldset': {
        borderColor: petDatePickerColors.primary,
      },
    },
    
    '&.Mui-focused': {
      backgroundColor: '#F5F5FF',
      transform: 'translateY(-1px)',
      boxShadow: '0 6px 16px rgba(255, 182, 193, 0.3)',
      
      '& fieldset': {
        borderColor: petDatePickerColors.primary,
        borderWidth: '3px',
      },
    },
    
    '&.Mui-error': {
      '& fieldset': {
        borderColor: petDatePickerColors.error,
      },
    },
  },
  
  '& .MuiInputLabel-root': {
    color: petDatePickerColors.text,
    fontWeight: 500,
    
    '&.Mui-focused': {
      color: petDatePickerColors.primary,
      transform: 'translate(14px, -9px) scale(0.75)',
    },
    
    '&.Mui-error': {
      color: petDatePickerColors.error,
    },
  },
  
  '& .MuiFormHelperText-root': {
    marginLeft: 0,
    marginTop: theme.spacing(0.5),
    color: petDatePickerColors.text,
    fontSize: '0.75rem',
    
    '&.Mui-error': {
      color: petDatePickerColors.error,
    },
  },
  
  '& .MuiInputBase-input': {
    color: petDatePickerColors.text,
    fontSize: '14px',
    padding: '12px 14px',
    
    '&::placeholder': {
      color: petDatePickerColors.placeholder,
      opacity: 1,
    },
  },
  
  // Calendar picker icon styling
  '& input[type="date"]::-webkit-calendar-picker-indicator': {
    cursor: 'pointer',
    backgroundColor: petDatePickerColors.calendarIcon,
    borderRadius: '50%',
    padding: '4px',
    margin: '0 4px',
    transition: 'all 0.2s ease',
    
    '&:hover': {
      backgroundColor: petDatePickerColors.primary,
      transform: 'scale(1.1)',
    },
  },
  
  // Firefox date picker styling
  '& input[type="date"]::-moz-calendar-picker-indicator': {
    cursor: 'pointer',
    backgroundColor: petDatePickerColors.calendarIcon,
    borderRadius: '50%',
    padding: '4px',
    margin: '0 4px',
  },
  
  // Custom date input styling
  '& input[type="date"]': {
    '&::-webkit-datetime-edit': {
      color: petDatePickerColors.text,
    },
    
    '&::-webkit-datetime-edit-fields-wrapper': {
      padding: '0',
    },
    
    '&::-webkit-datetime-edit-text': {
      color: petDatePickerColors.text,
      padding: '0 2px',
    },
    
    '&::-webkit-datetime-edit-month-field': {
      color: petDatePickerColors.text,
    },
    
    '&::-webkit-datetime-edit-day-field': {
      color: petDatePickerColors.text,
    },
    
    '&::-webkit-datetime-edit-year-field': {
      color: petDatePickerColors.text,
    },
  },
}));

// Enhanced calendar popup styles
export const calendarPopupStyles = `
  /* Calendar picker indicator styling */
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="datetime-local"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23FFB6C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>') no-repeat center;
    background-size: 18px 18px;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3s ease;
    padding: 4px;
    border-radius: 4px;
  }

  input[type="date"]::-webkit-calendar-picker-indicator:hover,
  input[type="datetime-local"]::-webkit-calendar-picker-indicator:hover,
  input[type="time"]::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
    background-color: #F0F8FF;
    transform: scale(1.1);
  }

  /* Hide spin buttons and clear buttons */
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-clear-button,
  input[type="datetime-local"]::-webkit-inner-spin-button,
  input[type="datetime-local"]::-webkit-clear-button,
  input[type="time"]::-webkit-inner-spin-button,
  input[type="time"]::-webkit-clear-button {
    display: none;
  }

  /* Enhanced calendar popup styles for WebKit browsers */
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="date"] {
      position: relative;
    }
    
    input[type="date"]:focus {
      outline: none;
    }
  }
`;

// MUI DatePicker theme customization
export const datePickerTheme = createTheme({
  components: {
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          backgroundColor: petDatePickerColors.background,
          borderBottom: `1px solid ${petDatePickerColors.border}`,
          paddingTop: '16px',
          paddingBottom: '16px',
        },
        labelContainer: {
          fontSize: '18px',
          fontWeight: 600,
          color: petDatePickerColors.primary,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: {
          '& .MuiIconButton-root': {
            backgroundColor: petDatePickerColors.hover,
            border: `1px solid ${petDatePickerColors.border}`,
            borderRadius: '12px',
            width: '40px',
            height: '40px',
            margin: '0 4px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: petDatePickerColors.primary,
              color: 'white',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
          },
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: petDatePickerColors.background,
          padding: '16px',
        },
        weekDayLabel: {
          fontSize: '14px',
          fontWeight: 600,
          color: petDatePickerColors.secondary,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          fontWeight: 500,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: petDatePickerColors.text,
          backgroundColor: 'transparent',
          border: `1px solid transparent`,
          borderRadius: '12px',
          width: '40px',
          height: '40px',
          margin: '2px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            backgroundColor: petDatePickerColors.hover,
            borderColor: petDatePickerColors.secondary,
            transform: 'scale(1.1)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            fontWeight: 600,
            '&::before': {
              opacity: 1,
            },
          },
          '&:focus': {
            backgroundColor: petDatePickerColors.focus,
            borderColor: petDatePickerColors.primary,
            boxShadow: `0 0 0 3px ${petDatePickerColors.primary}30`,
            outline: 'none',
          },
        },
        today: {
          backgroundColor: petDatePickerColors.accent + '20',
          borderColor: petDatePickerColors.accent,
          fontWeight: 600,
          color: petDatePickerColors.accent,
          '&:hover': {
            backgroundColor: petDatePickerColors.accent + '40',
            borderColor: petDatePickerColors.accent,
          },
        },
        selected: {
          backgroundColor: `${petDatePickerColors.primary} !important`,
          color: 'white !important',
          fontWeight: 700,
          borderColor: petDatePickerColors.primary,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          transform: 'scale(1.05)',
          '&:hover': {
            backgroundColor: `${petDatePickerColors.primary} !important`,
            transform: 'scale(1.1)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
          },
        },
        disabled: {
          color: petDatePickerColors.placeholder,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
            transform: 'none',
          },
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            borderRadius: '20px',
            border: `2px solid ${petDatePickerColors.border}`,
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)',
            backgroundColor: petDatePickerColors.background,
            overflow: 'hidden',
            backdropFilter: 'blur(12px)',
            background: `linear-gradient(135deg, ${petDatePickerColors.background} 0%, ${petDatePickerColors.background}f0 100%)`,
          },
        },
      },
    },
    MuiPickersCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: petDatePickerColors.background,
        },
      },
    },
  },
});