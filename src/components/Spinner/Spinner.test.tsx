import { render, screen } from 'utils/tests/helpers';

import Spinner from '.';

describe('<Spinner />', () => {
  it('should render the Spinner', () => {
    const { container } = render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
