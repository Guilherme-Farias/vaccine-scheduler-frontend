import React from 'react';

import { ReactDatePickerProps } from 'react-datepicker';

import { FormLabel, FormErrorMessage } from 'components/FormControls';

import * as S from './styles';

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
      {...(label ? { id: name } : {})}
      {...props}
    />
    {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
  </S.StyledFormGroup>
);

export default DatePicker;
