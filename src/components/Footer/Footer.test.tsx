import { render, screen } from 'utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the Copyright', () => {
    const { container } = render(<Footer />);

    const copyrightRegex =
      /^© (\d{4}) Minha Vacina\. Todos os direitos reservados\.$/i;

    expect(screen.getByText(copyrightRegex)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
