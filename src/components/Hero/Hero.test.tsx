import { render, screen, userEvent } from 'utils/tests/helpers';

import Hero from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('<Hero />', () => {
  it('should render Hero ', () => {
    const { container } = render(<Hero />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should navigate to "/agendamentos"', async () => {
    render(<Hero />);

    await userEvent.click(
      screen.getByRole('button', { name: /liste os agendamentos/i }),
    );

    expect(mockNavigate).toHaveBeenCalledWith('/agendamentos');
  });

  it('should navigate to "/agendamentos/novo"', async () => {
    render(<Hero />);

    await userEvent.click(
      screen.getByRole('button', { name: /faça seu agendamento/i }),
    );

    expect(mockNavigate).toHaveBeenCalledWith('/agendamentos/novo');
  });
});
