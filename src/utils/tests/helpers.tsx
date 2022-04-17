import { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';

import { ThemeProvider } from 'styled-components/macro';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

type CustomRenderProps = Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {ui}
    </ThemeProvider>,
    renderOptions,
  );

export * from '@testing-library/react';
export { customRender as render, userEvent, faker };
