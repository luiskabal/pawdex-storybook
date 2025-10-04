import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React from 'react';
import { themes, type ThemeKey } from './themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'pet',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'pet', title: 'Pet Theme (Default)' },
          { value: 'professional', title: 'Professional' },
          { value: 'dark', title: 'Dark Mode' },
          { value: 'nature', title: 'Nature' },
          { value: 'ocean', title: 'Ocean' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeKey = context.globals.theme as ThemeKey || 'pet';
      const selectedTheme = themes[themeKey]?.theme || themes.pet.theme;
      
      return React.createElement(ThemeProvider, { theme: selectedTheme },
        React.createElement(CssBaseline),
        React.createElement(Story)
      );
    },
  ],
};

export default preview;