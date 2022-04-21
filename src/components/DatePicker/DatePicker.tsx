import React from 'react';
import ptBR from 'date-fns/locale/pt-BR';

import { ReactDatePickerProps, registerLocale } from 'react-datepicker';

import { FormLabel, FormErrorMessage } from 'components/FormControls';

import * as S from './styles';

registerLocale('pt-BR', ptBR);

export type DatePickerProps = {
  label?: string;
  error?: string;
  style?: React.CSSProperties;
} & ReactDatePickerProps;

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  label = '',
  error = '',
  disabled,
  readOnly,
  className,
  style,
  locale = 'pt-BR',
  ...props
}: DatePickerProps) => (
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
    <S.DatePicker
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      locale={locale}
      {...(label ? { id: name } : {})}
      {...props}
    />
    {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
  </S.StyledFormGroup>
);

export default DatePicker;
