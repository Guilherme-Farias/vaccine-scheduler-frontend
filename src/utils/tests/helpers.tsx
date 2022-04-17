import { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';

type CustomRenderProps = Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {},
) => render(ui, renderOptions);

export * from '@testing-library/react';
export { customRender as render, userEvent, faker };
