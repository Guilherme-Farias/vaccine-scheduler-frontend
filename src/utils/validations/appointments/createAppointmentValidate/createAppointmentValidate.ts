import Joi from 'joi';
import { getFieldErrors } from 'utils/validations/helpers';

import { CreateAppointmentFormData } from 'types/appointments';

export function createAppointmentValidate(values: CreateAppointmentFormData) {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      'string.base': 'Campo obrigatório!',
      'string.empty': 'O nome não pode ser vazio',
      'any.required': 'Campo obrigatório!',
    }),
    birth_date: Joi.date().iso().less('now').required().messages({
      'date.base': '`birth_date` deve ser do tipo `date`',
      'date.format': 'A data deve seguir padrão ISO',
      'date.less': 'A data de nascimento deve ser menor do que o dia atual',
      'any.required': 'Campo obrigatório!',
    }),
    appointment_date: Joi.date().iso().min('now').required().messages({
      'date.base': 'Campo obrigatório!',
      'date.format': 'A data deve seguir padrão ISO',
      'date.min':
        'A data do agendamento deve maior do que o dia e horário atual',
      'any.required': 'Campo obrigatório!',
    }),
  });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
