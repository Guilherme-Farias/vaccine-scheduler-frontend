import styled, { css } from 'styled-components/macro';

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.font.sizes['3xl']};
    @media ${theme.queries.phoneAndSmaller} {
      font-size: ${theme.font.sizes['2xl']};
    }
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings['2xs']};
    > svg {
      font-size: inherit;
    }
  `}
`;

export const Text = styled.h1`
  ${({ theme }) => css`
    font-size: inherit;
    font-weight: ${theme.font.regular};
  `}
`;
