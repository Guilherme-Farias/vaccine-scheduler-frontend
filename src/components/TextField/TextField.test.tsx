import { render, screen, userEvent } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('should render with Label', () => {
    render(<TextField label="Test" name="test" />);

    expect(screen.getByLabelText(/test/i)).toBeInTheDocument();
  });

  it('should render without Label', () => {
    render(<TextField />);

    expect(screen.queryByLabelText(/test/i)).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    render(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('should changes its value when typing', async () => {
    render(<TextField label="Test" name="test" />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    await userEvent.type(input, text);

    expect(input).toHaveValue(text);
  });

  it('should not changes its value when disabled', async () => {
    render(<TextField label="Test" name="test" disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    await userEvent.type(input, text);

    expect(input).not.toHaveValue(text);
  });

  it('should not changes its value when read only', async () => {
    render(<TextField label="Test" name="test" readOnly />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readOnly');

    const text = 'This is my new text';
    await userEvent.type(input, text);

    expect(input).not.toHaveValue(text);
  });

  it('should render with error', () => {
    const { container } = render(
      <TextField label="Test" name="test" error="Error message" />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be accessible by tab', () => {
    render(<TextField label="Test" name="test" />);

    const input = screen.getByLabelText(/test/i);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should not accessible by tab when disabled', () => {
    render(<TextField label="Test" name="test" disabled />);

    const input = screen.getByLabelText(/test/i);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
