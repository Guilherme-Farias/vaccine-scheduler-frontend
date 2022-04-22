import Joi from 'joi';

export const fieldsValidations = {
  name: Joi.string().trim().required().messages({
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
    'date.min': 'A data do agendamento deve maior do que o dia e horário atual',
    'any.required': 'Campo obrigatório!',
  }),
  vaccinated: Joi.boolean().strict().required().messages({
    'boolean.base': 'Dado inválido',
    'any.required': 'Campo obrigatório!',
  }),
};
