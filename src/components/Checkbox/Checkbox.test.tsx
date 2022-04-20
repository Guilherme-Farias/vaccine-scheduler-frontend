import { render, screen, userEvent } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = render(
      <Checkbox name="checkbox_name" label="checkbox label" />,
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(
      screen.getByText(/checkbox label/i).closest('label'),
    ).toHaveAttribute('for', 'checkbox_name');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without label', () => {
    render(<Checkbox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });

  it('should changes its value when checking', async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should call onCheck with false if the Checkbox is already checked', async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should not changes its value when disabled', async () => {
    render(<Checkbox name="checkbox_name" label="checkbox label" disabled />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();

    await userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it('should be accessible with tab', async () => {
    render(<Checkbox name="checkbox_name" label="checkbox label" />);

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus();
  });

  it('should not accessible by tab when disabled', async () => {
    render(<Checkbox name="checkbox_name" label="checkbox label" disabled />);

    const checkbox = screen.getByLabelText('checkbox label');
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(checkbox).not.toHaveFocus();
  });
});
