import { render, screen, userEvent } from 'utils/tests/helpers';

import DatePicker from '.';

const onChangeSpy = jest.fn();
describe('<DatePicker />', () => {
  it('should render with Label', () => {
    render(<DatePicker label="Test" name="test" onChange={onChangeSpy} />);

    expect(screen.getByLabelText(/test/i)).toBeInTheDocument();
  });

  it('should render with Label', () => {
    render(<DatePicker onChange={onChangeSpy} />);

    expect(screen.queryByLabelText(/test/i)).not.toBeInTheDocument();
  });

  it('should render with error', () => {
    const { container } = render(
      <DatePicker
        onChange={onChangeSpy}
        label="Test"
        name="test"
        error="Error message"
      />,
    );

    expect(screen.getByText('Error message')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not changes its value when disabled', async () => {
    render(
      <DatePicker
        onChange={onChangeSpy}
        label="Test"
        name="test"
        error="Error message"
        disabled
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    await userEvent.type(input, text);

    expect(input).not.toHaveValue(text);
  });

  it('should not changes its value when read only', async () => {
    render(
      <DatePicker
        onChange={onChangeSpy}
        label="Test"
        name="test"
        error="Error message"
        readOnly
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readOnly');

    const text = 'This is my new text';
    await userEvent.type(input, text);

    expect(input).not.toHaveValue(text);
  });

  it('should be accessible by tab', () => {
    render(<DatePicker onChange={onChangeSpy} label="Test" name="test" />);

    const input = screen.getByLabelText(/test/i);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should not accessible by tab when disabled', () => {
    render(
      <DatePicker onChange={onChangeSpy} label="Test" name="test" disabled />,
    );

    const input = screen.getByLabelText(/test/i);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
