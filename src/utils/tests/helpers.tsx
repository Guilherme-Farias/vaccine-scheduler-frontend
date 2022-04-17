import { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';

import {
  MemoryRouter as Router,
  MemoryRouterProps as RouterProps,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components/macro';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

type CustomRenderProps = {
  routeProps?: RouterProps;
} & Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: ReactElement,
  { routeProps, ...renderOptions }: CustomRenderProps = {},
) =>
  render(
    <Router {...routeProps}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {ui}
      </ThemeProvider>
    </Router>,
    renderOptions,
  );

export * from '@testing-library/react';
export { customRender as render, userEvent, faker };
