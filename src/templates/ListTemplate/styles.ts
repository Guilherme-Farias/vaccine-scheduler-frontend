import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings['2xl']};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes['3xl']};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
  `}
`;
