export interface IAppointment {
  id: string;
  name: string;
  birth_date: string;
  appointment_date: string;
  vaccinated: boolean;
}

export type CreateAppointmentFormData = {
  name: string;
  birth_date: Date;
  appointment_date: Date;
};

export type UpdateAppointmentFormData = {
  name: string;
  birth_date: Date;
  appointment_date: Date;
  vaccinated: boolean;
};
