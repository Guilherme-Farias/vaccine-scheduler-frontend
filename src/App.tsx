import React from 'react';

import { ThemeProvider } from 'styled-components/macro';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Minha Vacina</h1>
    </ThemeProvider>
  );
};

export default App;
