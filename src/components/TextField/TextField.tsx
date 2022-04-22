import React, { InputHTMLAttributes } from 'react';
import { FormLabel, FormErrorMessage } from 'components/FormControls';
import * as S from './styles';

export type TextFieldProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = ({
  name,
  disabled,
  error = '',
  label = '',
  style,
  readOnly,
  className,
  ...props
}: TextFieldProps) => (
  <S.StyledFormGroup
    isDisabled={disabled}
    isInvalid={!!error}
    isReadOnly={readOnly}
    className={className}
    style={style}
  >
    {!!label && (
      <FormLabel htmlFor={name} isDisabled={disabled} isInvalid={!!error}>
        {label}
      </FormLabel>
    )}
    <S.TextFieldInput
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      {...(label ? { id: name } : {})}
      {...props}
    />
    {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
  </S.StyledFormGroup>
);

export default TextField;
