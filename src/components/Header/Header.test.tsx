import { render, screen, userEvent, within } from 'utils/tests/helpers';

import Header from '.';

describe('<Header />', () => {
  it('should render the Header', () => {
    const { container } = render(<Header />);

    expect(screen.getByText(/abrir menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /^minha vacina$/i }),
    ).toHaveAttribute('href', '/');

    expect(
      screen.getByRole('link', {
        name: /^página de listagem de agendamentos$/i,
      }),
    ).toHaveAttribute('href', '/agendamentos');

    expect(
      screen.getByRole('link', {
        name: /^página para criação de um novo agendamento$/i,
      }),
    ).toHaveAttribute('href', '/agendamentos/novo');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should handle the open/close mobile menu', async () => {
    render(<Header />);

    // Checks if the menu is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Open the menu
    await userEvent.click(screen.getByText(/abrir menu/i));
    const mobileMenu = screen.getByRole('dialog');

    // Check if the menu is open
    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveAttribute('aria-label', 'Menu de navegação');

    // Close menu by close button
    const inMobileMenu = within(screen.getByRole('dialog'));
    await userEvent.click(
      inMobileMenu.getByRole('button', { name: /dispensar menu/i }),
    );

    // Checks if the menu is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should close the mobile menu when clicking on the overlay', async () => {
    render(<Header />);

    // Checks if the menu is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Open the menu
    await userEvent.click(screen.getByText(/abrir menu/i));
    const mobileMenu = screen.getByRole('dialog');
    const overlay = mobileMenu.parentElement;

    // Check if the menu is open
    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveAttribute('aria-label', 'Menu de navegação');

    // Close menu on click overlay
    await userEvent.click(overlay!);

    // Checks if the menu is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should close the mobile menu with the Escape key', async () => {
    render(<Header />);

    // Checks if the menu is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Open the menu
    await userEvent.click(screen.getByText(/abrir menu/i));
    const mobileMenu = screen.getByRole('dialog');

    // Check if the menu is open
    expect(mobileMenu).toBeInTheDocument();
    expect(mobileMenu).toHaveAttribute('aria-label', 'Menu de navegação');

    // Close the menu by pressing the Escape key
    await userEvent.keyboard('{Esc}');

    // Checks if the menu is closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
