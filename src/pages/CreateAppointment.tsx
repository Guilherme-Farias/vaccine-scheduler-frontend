import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormTemplate from 'templates/FormTemplate';
import CreateAppointmentForm from 'components/CreateAppointmentForm';

import api, { getHttpError } from 'services/api';

import { CreateAppointmentFormData } from 'types/appointments';
import {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
} from 'utils/persistInStorage';

const storageKey = 'createAppointmentFormData';
const storageType = 'sessionStorage';
const defaultValues = {
  name: '',
  birth_date: new Date(),
  appointment_date: new Date(),
};

const CreateAppointment: React.FC = () => {
  const navigate = useNavigate();
  const sessionValues = useMemo<CreateAppointmentFormData>(() => {
    const data = getStorageItem(storageKey, defaultValues, storageType);
    return {
      ...data,
      birth_date: new Date(data.birth_date),
      appointment_date: new Date(data.appointment_date),
    };
  }, []);

  const setAppointmentInStorage = useCallback(
    (values: CreateAppointmentFormData) =>
      setStorageItem(storageKey, values, storageType),
    [],
  );

  const handleSubmit = useCallback(
    async (data: CreateAppointmentFormData) => {
      try {
        await api.post('/appointments', data);
        toast.success('Agendamento cadastrado com sucesso');
        removeStorageItem(storageKey, storageType);
        navigate('/agendamentos');
      } catch (reqError) {
        toast.error(getHttpError(reqError).message);
      }
    },
    [navigate],
  );

  return (
    <FormTemplate
      title="Novo agendamento"
      description="Agende o dia e horário que deseja ser vacinado."
    >
      <CreateAppointmentForm
        initialValues={sessionValues}
        setAppointmentInStorage={setAppointmentInStorage}
        handleSubmit={handleSubmit}
        handleBack={() => navigate('/agendamentos')}
      />
    </FormTemplate>
  );
};
export default CreateAppointment;
