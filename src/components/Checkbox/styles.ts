import styled, { css } from 'styled-components/macro';
import { darken } from 'polished';

import { FormGroup, FormLabel } from 'components/FormControls';
import { CheckboxProps } from './Checkbox';

type InputProps = Pick<CheckboxProps, 'fillColor'>;

export const Input = styled.input<InputProps>`
  ${({ theme, fillColor }) => css`
    cursor: pointer;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--checkbox-size);
    min-width: var(--checkbox-size);
    height: var(--checkbox-size);
    min-height: var(--checkbox-size);
    border: 2px solid ${theme.colors['gray-600']};
    border-radius: 2px;
    position: relative;
    outline: none;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:before {
      content: '';
      width: 7px;
      height: 10px;
      border: 2.5px solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 1px;
      opacity: 0;
      transition: 0.15s ease-in-out;
    }

    &:focus {
      box-shadow: ${theme.colors.blue} 0px 0px 0px 1px;
    }

    &:hover {
      border-color: ${theme.colors.black};
      transition: 0.15s ease-in-out;
    }

    &:checked {
      border-color: ${theme.colors[fillColor!]};
      background: ${theme.colors[fillColor!]};
      &:before {
        opacity: 1;
      }
    }
    &:disabled {
      border-color: ${theme.colors['gray-500']};
      background-color: ${theme.colors['gray-300']};
      &:checked {
        background: ${darken(0.2, theme.colors[fillColor!])};
        border-color: ${darken(0.2, theme.colors[fillColor!])};
      }
    }
  `}
`;

export const StyledFormLabel = styled(FormLabel)`
  ${({ theme }) => css`
    // remove base FormLabel margin
    margin-bottom: revert;
    line-height: var(--checkbox-size);
    padding-left: ${theme.spacings.xs};
  `}
`;

const styledFormGroupModifiers = {
  isDisabled: () => css`
    &,
    * {
      cursor: not-allowed;
    }
  `,
};

export const StyledFormGroup = styled(FormGroup)`
  ${({ isDisabled }) => css`
    display: flex;
    align-items: center;
    --checkbox-size: 20px;

    ${!!isDisabled && styledFormGroupModifiers.isDisabled()};
  `}
`;
