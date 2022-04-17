const BREAKPOINTS = {
  phone: 768,
  tablet: 1100,
  laptop: 1500,
};

export default {
  grid: {
    container: '81.25rem', // 1300px
    gutter: '2rem', // 32px
  },
  border: {
    radius: '0.625rem', // 4px
  },
  font: {
    family:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    sizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '2.5rem', // 40px
      '6xl': '3rem', // 48px
      '7xl': '3.75rem', // 60px
    },
  },
  colors: {
    primary: '#D03E35',
    secondary: '#E37236',
    tertiary: '#FFC801',

    mainBg: '#FFFFFF',
    minorBg: '#D03E35',

    green: '#15803d',
    red: '#DC2626',
    yellow: '#ffc107',
    blue: '#2563eb',

    white: '#FFFFFF',
    lightGray: '#e5e7eb',
    gray: '#6b7280',
    darkGray: '#1f2937',
    black: '#171923',
  },
  layers: {
    base: 100,
    menu: 200,
    overlay: 300,
    modal: 400,
    alwaysOnTop: 500,
  },
  spacings: {
    '3xs': '0.125rem', // 2px
    '2xs': '0.25rem', // 4px
    xs: '0.5rem', // 8px
    sm: '0.75rem', // 12px
    md: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '1.75rem', // 28px
    '3xl': '2rem', // 32px
    '4xl': '2.25rem', // 36px
    '5xl': '2.5rem', // 40px
    '6xl': '3rem', // 48px
    '7xl': '3.5rem', // 56px
    '8xl': '4rem', // 64px
    '9xl': '5rem', // 80px
  },
  queries: {
    phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
    tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
    laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  },
} as const;
