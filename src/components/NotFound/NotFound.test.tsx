import { render, screen, userEvent } from 'utils/tests/helpers';

import NotFound from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('<NotFound />', () => {
  it('should render NotFound ', () => {
    const { container } = render(<NotFound />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should navigate to "/" (Home)', async () => {
    render(<NotFound />);

    await userEvent.click(
      screen.getByRole('button', { name: /voltar para a página inicial/i }),
    );

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
