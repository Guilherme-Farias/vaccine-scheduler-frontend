import { render, screen } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the Logo', () => {
    const { container } = render(<Logo />);
    expect(
      screen.getByRole('heading', { name: /minha vacina/i }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
