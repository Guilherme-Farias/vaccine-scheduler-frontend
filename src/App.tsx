import React from 'react';

import { ThemeProvider } from 'styled-components/macro';
import GlobalStyles from 'styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from 'styles/theme';
import Routes from 'routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
      <ToastContainer position="bottom-right" />
    </ThemeProvider>
  );
};

export default App;
