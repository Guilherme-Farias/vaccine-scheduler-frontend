import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainSection = styled.main`
  ${({ theme }) => css`
    margin: ${theme.spacings['6xl']} 0;
    flex: 1 0 auto;
    > * {
      height: 100%;
    }
  `}
`;
