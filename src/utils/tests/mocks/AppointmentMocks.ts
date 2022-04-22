import { faker } from '@faker-js/faker';
import {
  CreateAppointmentFormData,
  UpdateAppointmentFormData,
  IAppointment,
} from 'types/appointments';

export const makeCreateAppointmentFormData = (
  overrides?: Partial<CreateAppointmentFormData>,
): CreateAppointmentFormData => ({
  name: faker.name.findName(),
  birth_date: faker.date.past(10),
  appointment_date: faker.date.future(),
  ...overrides,
});
export const makeUpdateAppointmentFormData = (
  overrides?: Partial<UpdateAppointmentFormData>,
): UpdateAppointmentFormData => ({
  name: faker.name.findName(),
  birth_date: faker.date.past(10),
  appointment_date: faker.date.future(),
  vaccinated: false,
  ...overrides,
});

export const makeAppointment = (
  overrides?: Partial<IAppointment>,
): IAppointment => ({
  id: faker.datatype.uuid(),
  name: faker.name.findName(),
  birth_date: faker.date.past(10).toISOString(),
  appointment_date: faker.date.future().toISOString(),
  vaccinated: false,
  ...overrides,
});
