import { render, screen } from 'utils/tests/helpers';

import Base from '.';

describe('<Base />', () => {
  it('should render the Base template', () => {
    const { container } = render(<Base />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
