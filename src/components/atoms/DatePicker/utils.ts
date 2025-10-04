import { calendarPopupStyles, globalCalendarStyles } from './styles';

/**
 * Injects calendar styles into the document head
 * This is necessary because native browser calendar popups can't be styled through CSS-in-JS
 */
export const injectCalendarStyles = (): void => {
  // Check if styles are already injected
  if (document.getElementById('pawdex-calendar-styles')) {
    return;
  }

  // Create style element
  const styleElement = document.createElement('style');
  styleElement.id = 'pawdex-calendar-styles';
  styleElement.textContent = `
    ${calendarPopupStyles}
    ${globalCalendarStyles}
  `;

  // Inject into document head
  document.head.appendChild(styleElement);
};

/**
 * Removes calendar styles from the document head
 */
export const removeCalendarStyles = (): void => {
  const styleElement = document.getElementById('pawdex-calendar-styles');
  if (styleElement) {
    styleElement.remove();
  }
};

/**
 * Hook to automatically inject calendar styles when component mounts
 */
export const useCalendarStyles = (): void => {
  if (typeof window !== 'undefined') {
    injectCalendarStyles();
  }
};