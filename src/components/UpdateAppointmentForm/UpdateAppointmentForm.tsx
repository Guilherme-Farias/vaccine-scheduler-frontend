import React from 'react';
import { useFormik } from 'formik';

import TextField from 'components/TextField';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import Spinner from 'components/Spinner';

import { UpdateAppointmentFormData } from 'types/appointments';
import { updateAppointmentValidate } from 'utils/validations/appointments';

import Checkbox from 'components/Checkbox';
import * as S from './styles';

export type UpdateAppointmentFormProps = {
  initialValues: UpdateAppointmentFormData;
  handleSubmit(values: UpdateAppointmentFormData): Promise<void>;
  handleBack(): void;
  isLoading: boolean;
  errorMsg?: string;
};

const UpdateAppointmentForm: React.FC<UpdateAppointmentFormProps> = ({
  initialValues,
  handleSubmit,
  handleBack,
  isLoading,
  errorMsg,
}: UpdateAppointmentFormProps) => {
  const {
    values: formValues,
    errors,
    touched,
    isSubmitting,
    getFieldProps,
    handleSubmit: formHandleSubmit,
    setFieldValue,
    ...formik
  } = useFormik<UpdateAppointmentFormData>({
    initialValues,
    validate: updateAppointmentValidate,
    enableReinitialize: true,
    onSubmit: async values => {
      await handleSubmit(values);
    },
  });

  if (errorMsg) {
    return <p>{errorMsg}</p>;
  }

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (!Object.keys(initialValues).length) {
    return <p>Sem dados</p>;
  }

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
      <Checkbox label="Vacinado" {...getFieldProps('vaccinated')} />

      <S.ButtonGroup>
        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? <Spinner color="white" /> : 'Salvar'}
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
export default UpdateAppointmentForm;
