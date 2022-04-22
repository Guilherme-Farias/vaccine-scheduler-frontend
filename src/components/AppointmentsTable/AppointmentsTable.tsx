import React from 'react';
import { toast } from 'react-toastify';

import Checkbox from 'components/Checkbox';
import VisuallyHidden from 'components/VisuallyHidden';
import Button from 'components/Button';

import { formatDate, formatDateWithHours } from 'utils/formatters';
import { IAppointment } from 'types/appointments';

import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export type AppointmentsTableProps = {
  appointmentsList: IAppointment[];
  vaccinatedToggle(appointmentId: string): Promise<void>;
  isLoading: boolean;
  errorMsg?: string;
};

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({
  appointmentsList,
  vaccinatedToggle,
  isLoading,
  errorMsg,
}: AppointmentsTableProps) => {
  const navigate = useNavigate();
  // if is errored
  if (errorMsg) {
    toast.error(errorMsg);
  }

  // if dont have data in storage
  if (!appointmentsList.length && isLoading) {
    return <p>Carregando...</p>;
  }

  // id dont have content
  if (!appointmentsList.length) {
    return <p>Sem dados</p>;
  }

  return (
    <S.Container>
      <S.Table>
        <S.TableHead>
          <tr>
            <S.TableCell scope="col" as="th">
              Vacinado
            </S.TableCell>
            <S.TableCell scope="col" as="th">
              Data do agendamento
            </S.TableCell>
            <S.TableCell
              scope="col"
              as="th"
              style={{
                textAlign: 'left',
              }}
            >
              Nome
            </S.TableCell>
            <S.TableCell scope="col" as="th">
              Data do nascimento
            </S.TableCell>
            <S.TableCell scope="col" as="th">
              <VisuallyHidden>Editar</VisuallyHidden>
            </S.TableCell>
          </tr>
        </S.TableHead>
        <tbody>
          {appointmentsList.map(appt => (
            <S.TableRowStripped key={appt.id}>
              <S.TableCell>
                <Checkbox
                  checked={appt.vaccinated}
                  onChange={() => vaccinatedToggle(appt.id)}
                  disabled={isLoading}
                  fillColor="green"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                <VisuallyHidden>
                  Definir o status da vacinação do usuário {appt.name} para{' '}
                  {appt.vaccinated ? 'não vacinado' : 'vacinado'}
                </VisuallyHidden>
              </S.TableCell>
              <S.TableCell>
                {formatDateWithHours(appt.appointment_date)}
              </S.TableCell>
              <S.TableCell
                style={{
                  textAlign: 'left',
                }}
              >
                {appt.name}
              </S.TableCell>
              <S.TableCell>{formatDate(appt.birth_date)}</S.TableCell>
              <S.TableCell>
                <Button
                  type="button"
                  size="small"
                  disabled={isLoading}
                  onClick={() => navigate(`/agendamentos/${appt.id}/editar`)}
                >
                  Editar
                  <VisuallyHidden> {appt.name}</VisuallyHidden>
                </Button>
              </S.TableCell>
            </S.TableRowStripped>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};
export default AppointmentsTable;
