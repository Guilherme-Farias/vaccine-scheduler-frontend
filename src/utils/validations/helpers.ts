import Joi from 'joi';
import { IParamErrors } from 'types/global';

export function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: IParamErrors = {};

  if (objError.error) {
    objError.error.details.forEach(err => {
      errors[err.path.join('.')] = err.message;
    });
  }

  return errors;
}
