import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormTemplate from 'templates/FormTemplate';
import UpdateAppointmentForm from 'components/UpdateAppointmentForm';

import api, { getHttpError } from 'services/api';

import { IAppointment, UpdateAppointmentFormData } from 'types/appointments';
import { HttpError } from 'errors/HttpError';

const UpdateAppointment: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState<IAppointment>();
  const initialFormData = useMemo(
    () => ({
      name: appointment ? appointment.name : '',
      birth_date: appointment ? new Date(appointment.birth_date) : new Date(),
      appointment_date: appointment
        ? new Date(appointment.appointment_date)
        : new Date(),
      vaccinated: appointment ? appointment.vaccinated : false,
    }),
    [appointment],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<HttpError>({} as HttpError);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/appointments/${id}`);
      setAppointment({
        ...data,
        birth_date: new Date(data.birth_date),
        appointment_date: new Date(data.appointment_date),
      });
    } catch (reqError) {
      setError(getHttpError(reqError));
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = useCallback(
    async (data: UpdateAppointmentFormData) => {
      try {
        await api.put(`/appointments/${id}`, data);
        toast.success('Agendamento atualizado com sucesso');
        navigate('/agendamentos');
      } catch (reqError) {
        toast.error(getHttpError(reqError).message);
      }
    },
    [id, navigate],
  );

  return (
    <FormTemplate
      title="Editar o agendamento"
      description="Edite as informações do agendamento."
    >
      <UpdateAppointmentForm
        initialValues={initialFormData}
        isLoading={isLoading}
        errorMsg={error.message}
        handleSubmit={handleSubmit}
        handleBack={() => navigate('/agendamentos')}
      />
    </FormTemplate>
  );
};
export default UpdateAppointment;
