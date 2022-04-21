import { render, screen } from 'utils/tests/helpers';

import FormTemplate from '.';

describe('<FormTemplate />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormTemplate title="Title" description="description">
        <form data-testid="test" />
      </FormTemplate>,
    );
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
