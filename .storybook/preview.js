import React from 'react';

import { MemoryRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components/macro";
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/global'
import { ToastContainer } from 'react-toastify';

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg />
        <Story />
        <ToastContainer position="bottom-right" />
      </ThemeProvider>
    </Router>
  )
]
