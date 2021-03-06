import Joi from 'joi';
import { getFieldErrors } from 'utils/validations/helpers';

import { CreateAppointmentFormData } from 'types/appointments';
import { fieldsValidations } from 'utils/validations/fieldsValidations';

export function createAppointmentValidate(values: CreateAppointmentFormData) {
  const { name, birth_date, appointment_date } = fieldsValidations;
  const schema = Joi.object({
    name,
    birth_date,
    appointment_date,
  });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
