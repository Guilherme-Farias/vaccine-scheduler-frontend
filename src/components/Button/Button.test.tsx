import { render, screen } from 'utils/tests/helpers';
import theme from 'styles/theme';
import Button, { ButtonVariants } from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      'font-size': '1.125rem',
      padding: '0.75rem 1.25rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the small size', () => {
    render(<Button size="small">Test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      'font-size': '1rem',
      padding: '0.25rem 0.75rem',
    });
  });
  it('should render the large size', () => {
    render(<Button size="large">Test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      'font-size': '1.25rem',
      padding: '1rem 2rem',
    });
  });
  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      width: '100%',
    });
  });
  it('should render the fill variant by default', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      'background-color': theme.colors.primary,
      color: theme.colors.white,
    });
  });
  it('should render the outline variant', () => {
    render(<Button variant="outline">Test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      'background-color': 'transparent',
      color: theme.colors.primary,
      border: '2px solid currentColor',
    });
  });
  it('should render the ghost variant', () => {
    render(<Button variant="ghost">Test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      'background-color': 'transparent',
      color: theme.colors['gray-500'],
    });
  });
  it('should throw error when unrecognized Button variant is provided', () => {
    // Restore writing to stderr.
    const err = console.error;
    console.error = jest.fn();

    const unrecognized = 'unrecognized variant' as unknown as ButtonVariants;
    expect(() =>
      render(<Button variant={unrecognized}>Test</Button>),
    ).toThrow();

    // Restore writing to stderr.
    console.error = err;
  });

  it('should be able to change color and font color', () => {
    render(
      <Button color="tertiary" fontColor="black">
        Test
      </Button>,
    );
    expect(screen.getByRole('button', { name: /test/i })).toHaveStyle({
      'background-color': theme.colors.tertiary,
      color: theme.colors.black,
    });
  });

  it('should render a disabled Button', () => {
    render(<Button disabled>Test</Button>);

    expect(screen.getByRole('button', { name: /test/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      },
    );
  });
});
