import { IParamErrors } from 'types/global';

type HttpErrorProps = {
  message: string;
  statusCode?: number;
  params?: IParamErrors;
};

export class HttpError {
  readonly message: string;

  readonly statusCode: number;

  readonly params?: IParamErrors;

  constructor({ message, statusCode = 400, params }: HttpErrorProps) {
    this.message = message;
    this.statusCode = statusCode;
    this.params = params;
  }
}
