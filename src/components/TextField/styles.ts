import styled, { css, DefaultTheme } from 'styled-components/macro';
import { FormGroup } from 'components/FormControls';

export const TextFieldInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.md};
    outline: none;

    width: 100%;
    height: ${theme.spacings['5xl']};
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xs} ${theme.spacings.sm};
    border: 1px solid;
    border-color: ${theme.colors['gray-500']};

    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    &:hover {
      border-color: ${theme.colors['gray-600']};
      box-shadow: ${theme.colors['gray-600']} 0px 0px 0px 1px;
    }
    &:focus {
      border-color: ${theme.colors.blue};
      box-shadow: ${theme.colors.blue} 0px 0px 0px 1px;
    }
  `}
`;

const styledFormGroupModifiers = {
  isDisabled: (theme: DefaultTheme) => css`
    &,
    * {
      cursor: not-allowed;
    }

    ${TextFieldInput} {
      color: ${theme.colors['gray-800']};
      background-color: ${theme.colors['gray-300']};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  isInvalid: (theme: DefaultTheme) => css`
    ${TextFieldInput} {
      border-color: ${theme.colors.red};
      &:focus {
        box-shadow: ${theme.colors.red} 0px 0px 0px 1px;
      }
    }
  `,
  isReadOnly: (theme: DefaultTheme) => css`
    ${TextFieldInput} {
      border-color: ${theme.colors['gray-600']};
      background-color: ${theme.colors['gray-300']};
      &:focus {
        border-color: ${theme.colors.blue};
        box-shadow: ${theme.colors.blue} 0px 0px 0px 1px;
      }
    }
  `,
};

export const StyledFormGroup = styled(FormGroup)`
  ${({ theme, isDisabled, isInvalid, isReadOnly }) => css`
    ${!!isDisabled && styledFormGroupModifiers.isDisabled(theme)};
    ${!!isInvalid && styledFormGroupModifiers.isInvalid(theme)};
    ${!!isReadOnly && styledFormGroupModifiers.isReadOnly(theme)};
  `}
`;
