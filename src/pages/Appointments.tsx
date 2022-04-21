import React, { useState, useCallback, useEffect } from 'react';

import ListTemplate from 'templates/ListTemplate';
import AppointmentsTable from 'components/AppointmentsTable';

import api, { getHttpError } from 'services/api';

import { HttpError } from 'errors/HttpError';
import { getStorageItem, setStorageItem } from 'utils/persistInStorage';
import { IAppointment } from 'types/appointments';

const storageKey = 'appointments';
const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>(() =>
    getStorageItem<IAppointment[]>(storageKey, []),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<HttpError>({} as HttpError);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get('/appointments');
      setAppointments(data || []);
      setStorageItem(storageKey, data);
    } catch (reqError) {
      setError(getHttpError(reqError));
      setStorageItem(storageKey, []);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const vaccinatedToggle = useCallback(
    async (appointmentId: string) => {
      const previusData = getStorageItem(storageKey, []);
      try {
        const updatedAppointments = appointments.map(appt => {
          return appointmentId === appt.id
            ? { ...appt, vaccinated: !appt.vaccinated }
            : appt;
        });
        setAppointments(updatedAppointments);
        await api.patch(`/appointments/${appointmentId}/vaccine`);
        setStorageItem(storageKey, updatedAppointments);
      } catch (reqError) {
        setError(getHttpError(reqError));
        setAppointments(previusData);
        setStorageItem(storageKey, previusData);
      }
    },
    [appointments],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ListTemplate
      title="Agendamentos"
      description="Lista com todos agendamentos, incluindo o status da vacinação, data do agendamento, nome do paciente, data de nascimento do paciente e a possiblidade de edição do agendamento"
      isLoading={isLoading}
    >
      <AppointmentsTable
        appointmentsList={appointments}
        vaccinatedToggle={vaccinatedToggle}
        isLoading={isLoading}
        errorMsg={error.message}
      />
    </ListTemplate>
  );
};
export default Appointments;
