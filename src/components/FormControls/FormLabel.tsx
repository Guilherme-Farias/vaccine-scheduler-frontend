import styled, { css, DefaultTheme } from 'styled-components/macro';

type FormLabelProps = {
  isDisabled?: boolean;
  isInvalid?: boolean;
};

const formLabelModifiers = {
  isDisabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    color: ${theme.colors['gray-500']};
  `,
  isInvalid: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `,
};

const FormLabel = styled.label<FormLabelProps>`
  ${({ theme, isDisabled, isInvalid }) => css`
    cursor: pointer;
    display: inline-block;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.md};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.xs};

    ${!!isDisabled && formLabelModifiers.isDisabled(theme)}
    ${!!isInvalid && formLabelModifiers.isInvalid(theme)}
  `}
`;

export { FormLabel, type FormLabelProps };
