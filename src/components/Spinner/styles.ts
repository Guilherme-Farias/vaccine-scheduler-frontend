import styled, { css } from 'styled-components/macro';

import { SpinnerProps } from './Spinner';

export const Container = styled.div<SpinnerProps>`
  ${({ theme, color }) => css`
    --spinner-size: ${theme.spacings['3xl']};
    display: inline-block;
    width: var(--spinner-size);
    height: var(--spinner-size);
    vertical-align: -0.125em;
    border: ${theme.spacings['2xs']} solid ${theme.colors[color!]};
    border-right-color: transparent;
    border-radius: 50%;
    animation: 0.75s linear infinite rotate;

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
