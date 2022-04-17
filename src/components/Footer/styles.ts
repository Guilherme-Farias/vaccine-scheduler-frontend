import styled, { css } from 'styled-components/macro';

export const Container = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spacings.lg} 0;

    @media ${theme.queries.phoneAndSmaller} {
      padding: ${theme.spacings.xs} 0;
    }
  `}
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.lg};
    margin: auto;
    text-align: center;

    @media ${theme.queries.phoneAndSmaller} {
      font-size: ${theme.font.sizes.md};
    }
  `}
`;
