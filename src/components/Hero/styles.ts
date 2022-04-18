import styled, { css } from 'styled-components/macro';

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacings.lg};
    height: 100%;

    @media ${theme.queries.tabletAndSmaller} {
      justify-content: start;
      flex-direction: column-reverse;
      align-items: center;
      gap: ${theme.spacings.sm};
    }
  `}
`;

export const Typography = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes['5xl']};
    font-weight: ${theme.font.regular};

    @media ${theme.queries.tabletAndSmaller} {
      font-size: ${theme.font.sizes['3xl']};
    }
  `}
`;

export const Highlight = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};

    max-width: 300px;

    margin-top: ${theme.spacings['6xl']};
    @media ${theme.queries.tabletAndSmaller} {
      max-width: revert;
      align-items: revert;
      margin-top: ${theme.spacings['2xl']};
    }
  `}
`;
