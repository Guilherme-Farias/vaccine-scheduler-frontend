import Joi from 'joi';
import { getFieldErrors } from 'utils/validations/helpers';

import { UpdateAppointmentFormData } from 'types/appointments';
import { fieldsValidations } from 'utils/validations/fieldsValidations';

export function updateAppointmentValidate(values: UpdateAppointmentFormData) {
  const { name, birth_date, appointment_date, vaccinated } = fieldsValidations;
  const schema = Joi.object({
    name,
    birth_date,
    appointment_date,
    vaccinated,
  });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
