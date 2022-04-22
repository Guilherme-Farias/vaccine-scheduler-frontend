import { faker } from '@faker-js/faker';
import { CreateAppointmentFormData } from 'types/appointments';
import { makeCreateAppointmentFormData } from 'utils/tests/mocks/AppointmentMocks';
import { createAppointmentValidate } from '.';

describe('createAppointmentValidate()', () => {
  it('should validate when no fields is provided', () => {
    const values = makeCreateAppointmentFormData({
      name: undefined,
      birth_date: undefined,
      appointment_date: undefined,
    });

    const errors = createAppointmentValidate({ ...values });

    expect(errors).toMatchObject({
      name: 'Campo obrigatório!',
      birth_date: 'Campo obrigatório!',
      appointment_date: 'Campo obrigatório!',
    });
  });

  it('should validate empty fields', () => {
    const values = makeCreateAppointmentFormData({
      name: '',
      birth_date: '',
      appointment_date: '',
    } as unknown as CreateAppointmentFormData);

    const errors = createAppointmentValidate({ ...values });

    expect(errors).toMatchObject({
      name: 'O nome não pode ser vazio',
      birth_date: 'A data deve seguir padrão ISO',
      appointment_date: 'A data deve seguir padrão ISO',
    });
  });

  it('should validate birth_date when a future date is provided', () => {
    const values = makeCreateAppointmentFormData({
      birth_date: faker.date.future(10),
    });

    const errors = createAppointmentValidate({ ...values });

    expect(errors).toMatchObject({
      birth_date: 'A data de nascimento deve ser menor do que o dia atual',
    });
  });

  it('should validate appointment_date when an earlier date is provided', () => {
    const values = makeCreateAppointmentFormData({
      appointment_date: faker.date.past(),
    });

    const errors = createAppointmentValidate({ ...values });

    expect(errors).toMatchObject({
      appointment_date:
        'A data do agendamento deve maior do que o dia e horário atual',
    });
  });

  it('should not return errors when fields are passed correctly', () => {
    const values = makeCreateAppointmentFormData();

    const errors = createAppointmentValidate({ ...values });

    expect(errors).toMatchObject({});
  });
});
