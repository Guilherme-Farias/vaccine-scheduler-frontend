import { render, screen } from 'utils/tests/helpers';

import ListTemplate from '.';

describe('<ListTemplate />', () => {
  it('should render the ListTemplate', () => {
    const { container } = render(
      <ListTemplate title="Title" description="Description">
        <p>Children</p>
      </ListTemplate>,
    );
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

export default 1;
