import React from 'react';

import { ThemeProvider } from "styled-components/macro";
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'minha-vacina-main',
    values: [
      {
        name: 'minha-vacina-main',
        value: theme.colors.mainBg
      },
      {
        name: 'minha-vacina-minor',
        value: theme.colors.minorBg
      },
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
