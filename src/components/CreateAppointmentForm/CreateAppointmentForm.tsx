import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import TextField from 'components/TextField';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import Spinner from 'components/Spinner';

import { CreateAppointmentFormData } from 'types/appointments';
import { createAppointmentValidate } from 'utils/validations/appointments';

import * as S from './styles';

export type CreateAppointmentFormProps = {
  initialValues: CreateAppointmentFormData;
  handleSubmit(values: CreateAppointmentFormData): Promise<void>;
  handleBack(): void;
  setAppointmentInStorage?(values: CreateAppointmentFormData): void;
};

const CreateAppointmentForm: React.FC<CreateAppointmentFormProps> = ({
  initialValues,
  handleSubmit,
  setAppointmentInStorage,
  handleBack,
}: CreateAppointmentFormProps) => {
  const {
    values: formValues,
    errors,
    touched,
    isSubmitting,
    getFieldProps,
    handleSubmit: formHandleSubmit,
    setFieldValue,
    ...formik
  } = useFormik<CreateAppointmentFormData>({
    initialValues,
    validate: createAppointmentValidate,
    onSubmit: async values => {
      await handleSubmit(values);
    },
  });

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    !!setAppointmentInStorage && setAppointmentInStorage(formValues);
  }, [formValues, setAppointmentInStorage]);

  return (
    <S.Form noValidate onSubmit={formHandleSubmit}>
      <TextField
        label="Nome completo"
        placeholder="Digite seu nome"
        type="text"
        error={touched.name ? errors.name : ''}
        {...getFieldProps('name')}
      />
      <DatePicker
        label="Data de nascimento"
        placeholderText="Selecione a data do seu nascimento"
        name="birth_date"
        selected={formValues.birth_date}
        maxDate={new Date()}
        error={touched.birth_date ? (errors.birth_date as string) : ''}
        onChange={val => {
          setFieldValue('birth_date', val);
        }}
        onBlur={formik.handleBlur}
      />
      <DatePicker
        label="Data do agendamento"
        placeholderText="Selecione a data do agendamento"
        name="appointment_date"
        selected={formValues.appointment_date}
        minDate={new Date()}
        showTimeSelect
        timeIntervals={60}
        dateFormat="Pp"
        peekNextMonth
        dropdownMode="select"
        error={
          touched.appointment_date ? (errors.appointment_date as string) : ''
        }
        onChange={val => {
          setFieldValue('appointment_date', val);
        }}
        onBlur={formik.handleBlur}
      />

      <S.ButtonGroup>
        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? <Spinner color="white" /> : 'Agendar'}
        </Button>

        <Button
          type="button"
          fullWidth
          variant="ghost"
          disabled={isSubmitting}
          onClick={handleBack}
        >
          {isSubmitting ? <Spinner /> : 'Voltar'}
        </Button>
      </S.ButtonGroup>
    </S.Form>
  );
};

export default CreateAppointmentForm;
