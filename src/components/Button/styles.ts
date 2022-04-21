import styled, { css, DefaultTheme } from 'styled-components/macro';
import { darken, transparentize } from 'polished';
import { ButtonProps } from '.';

type ButtonBaseProps = Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'color' | 'fontColor'
>;

const buttonBaseModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.md};
    padding: ${theme.spacings['2xs']} ${theme.spacings.sm};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.lg};
    padding: ${theme.spacings.sm} ${theme.spacings.lg};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xl};
    padding: ${theme.spacings.md} ${theme.spacings['3xl']};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};

export const ButtonBase = styled.button<ButtonBaseProps>`
  ${({ theme, size, fullWidth, color, disabled }) => css`
    border: 2px solid transparent;
    border-radius: ${theme.border.radius};
    font-weight: ${theme.font.medium};

    ${!!size && buttonBaseModifiers[size](theme)}
    ${!!fullWidth && buttonBaseModifiers.fullWidth()}
    ${!!disabled && buttonBaseModifiers.disabled()}
    &:focus {
      outline-color: ${theme.colors[color!]};
      outline-offset: 4px;
    }
    transition: background-color 0.2s;
  `}
`;

export const FillButton = styled(ButtonBase)`
  ${({ theme, color, fontColor }) => css`
    background-color: ${theme.colors[color!]};
    color: ${theme.colors[fontColor!]};

    &:hover {
      background-color: ${darken(0.05, theme.colors[color!])};
    }
  `}
`;

export const OutlineButton = styled(ButtonBase)`
  ${({ theme, color }) => css`
    background-color: transparent;
    color: ${theme.colors[color!]};
    border: 2px solid currentColor;

    &:hover {
      background-color: ${transparentize(0.9, theme.colors[color!])};
    }
  `}
`;

export const GhostButton = styled(ButtonBase)`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors['gray-500']};

    &:focus {
      outline-color: ${theme.colors['gray-500']};
    }
    &:hover {
      background-color: ${transparentize(0.85, theme.colors['gray-500'])};
      color: ${theme.colors.black};
    }
  `}
`;
