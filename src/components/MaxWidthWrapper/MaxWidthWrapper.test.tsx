import { render } from 'utils/tests/helpers';
import theme from 'styles/theme';

import MaxWidthWrapper from '.';

describe('<MaxWidthWrapper />', () => {
  it('should render the MaxWidthWrapper', () => {
    const { container } = render(<MaxWidthWrapper>Test</MaxWidthWrapper>);

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 81.25rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(2rem / 2);
        padding-right: calc(2rem / 2);
      }

      <div
        class="c0"
      >
        Test
      </div>
    `);
  });
});
