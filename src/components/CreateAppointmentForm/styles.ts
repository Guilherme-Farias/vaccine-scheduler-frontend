import styled, { css } from 'styled-components/macro';

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.md};
  `}
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    button + button {
      margin-top: ${theme.spacings.md};
    }
  `}
`;
