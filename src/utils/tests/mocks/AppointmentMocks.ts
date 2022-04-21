import { faker } from '@faker-js/faker';

import { IAppointment } from 'types/appointments';

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
