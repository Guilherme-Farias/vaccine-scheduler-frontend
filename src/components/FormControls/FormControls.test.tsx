import { render, screen } from 'utils/tests/helpers';

import { FormGroup, FormLabel, FormErrorMessage } from '.';

describe('<FormControls />', () => {
  it('should render the FormControls', () => {
    const { container } = render(
      <FormGroup>
        <FormLabel htmlFor="test">Test</FormLabel>
        <input id="test" />
        <FormErrorMessage />
      </FormGroup>,
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
