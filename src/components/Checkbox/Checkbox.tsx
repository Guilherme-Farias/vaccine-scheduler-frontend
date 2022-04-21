import React, { InputHTMLAttributes } from 'react';
import theme from 'styles/theme';
import * as S from './styles';

type ThemeColors = typeof theme.colors;

export type CheckboxColors = keyof Pick<
  ThemeColors,
  'primary' | 'secondary' | 'tertiary' | 'green' | 'red' | 'yellow' | 'blue'
>;

export type CheckboxProps = {
  label?: string;
  fillColor?: CheckboxColors;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  disabled,
  label = '',
  style,
  className,
  fillColor = 'primary',
  ...props
}: CheckboxProps) => (
  <S.StyledFormGroup isDisabled={disabled} className={className} style={style}>
    <S.Input
      name={name}
      type="checkbox"
      fillColor={fillColor}
      disabled={disabled}
      {...(label ? { id: name } : {})}
      {...props}
    />
    {!!label && (
      <S.StyledFormLabel htmlFor={name} isDisabled={disabled}>
        {label}
      </S.StyledFormLabel>
    )}
  </S.StyledFormGroup>
);

export default Checkbox;
