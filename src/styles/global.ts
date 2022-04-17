import { createGlobalStyle, css } from 'styled-components/macro';
import PoppinsLight from 'assets/fonts/poppins-light.woff2';
import PoppinsRegular from 'assets/fonts/poppins-regular.woff2';
import PoppinsMedium from 'assets/fonts/poppins-medium.woff2';
import PoppinsSemiBold from 'assets/fonts/poppins-semibold.woff2';
import PoppinsBold from 'assets/fonts/poppins-bold.woff2';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  // Setting the Font
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url(${PoppinsLight}) format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url(${PoppinsRegular}) format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Poppins Medium'), local('Poppins-Medium'),
        url(${PoppinsMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url(${PoppinsSemiBold}) format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Poppins Bold'), local('Poppins-Bold'),
        url(${PoppinsBold}) format('woff2');
  }

  // Soft CSS reset
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -mox-osx-font-smoothing: grayscale;
    &::before, &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    // Allow percentage-based heights in the application
    html,
    body,
    #root {
      height: 100%;
    }

    html {
      // Silence the warning about missing Reach Dialog styles
      --reach-dialog: 1;
    }

    body {
      color: ${theme.colors.black};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }

    // Create a root stacking context
    #root {
      isolation: isolate;
    }

    // Improve media defaults
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    // Remove built-in form typography styles
    body,
    input,
    textarea,
    select,
    button {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.md};
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.bold};
    }

    // Avoid text overflows
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    // Improve button defaults
    button {
      cursor: pointer;
    }
  `}
`;

export default GlobalStyles;
