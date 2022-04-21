import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  margin: auto;
  height: 100%;
  max-width: 420px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes['3xl']};
    font-weight: ${theme.font.semiBold};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    color: ${theme.colors['gray-500']};
    margin-bottom: ${theme.spacings.xl};
  `}
`;
