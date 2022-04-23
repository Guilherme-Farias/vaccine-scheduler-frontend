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

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes['5xl']};

    @media ${theme.queries.tabletAndSmaller} {
      font-size: ${theme.font.sizes['3xl']};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    max-width: 300px;

    margin-top: ${theme.spacings['6xl']};
    @media ${theme.queries.tabletAndSmaller} {
      max-width: revert;
      margin-top: ${theme.spacings['2xl']};
    }
  `}
`;

export const Img = styled.img`
  max-width: 628px;
`;
