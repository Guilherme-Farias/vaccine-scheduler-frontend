import { render, screen, userEvent } from 'utils/tests/helpers';
import { makeAppointment } from 'utils/tests/mocks/AppointmentMocks';

import AppointmentsTable from '.';

describe('<AppointmentsTable />', () => {
  const appointments = [
    makeAppointment(),
    makeAppointment({ vaccinated: true }),
  ];

  it('should render the AppointmentsTable', () => {
    render(
      <AppointmentsTable
        appointmentsList={appointments}
        vaccinatedToggle={jest.fn()}
        editAction={jest.fn()}
        isLoading={false}
      />,
    );
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getAllByRole('rowgroup')).toHaveLength(2);
  });

  it('should render the Loading state', () => {
    render(
      <AppointmentsTable
        appointmentsList={[]}
        vaccinatedToggle={jest.fn()}
        editAction={jest.fn()}
        isLoading
      />,
    );
    expect(screen.getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });
  it('should render the Error state', async () => {
    render(
      <AppointmentsTable
        appointmentsList={[]}
        vaccinatedToggle={jest.fn()}
        editAction={jest.fn()}
        isLoading={false}
        errorMsg="Some error"
      />,
    );
    expect(await screen.findByText(/some error/i)).toBeInTheDocument();
  });
  it('should call the vaccinatedToggle', async () => {
    const vaccinatedToggle = jest.fn();
    render(
      <AppointmentsTable
        appointmentsList={appointments}
        vaccinatedToggle={vaccinatedToggle}
        editAction={jest.fn()}
        isLoading={false}
      />,
    );

    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    expect(firstCheckbox).not.toBeChecked();

    await userEvent.click(firstCheckbox);
    expect(vaccinatedToggle).toBeCalledTimes(1);
    expect(vaccinatedToggle).toHaveBeenCalledWith(appointments[0].id);
  });

  it('should call the edit', async () => {
    const editAction = jest.fn();
    render(
      <AppointmentsTable
        appointmentsList={appointments}
        vaccinatedToggle={jest.fn()}
        editAction={editAction}
        isLoading={false}
      />,
    );

    const firstButton = screen.getAllByRole('button')[0];

    await userEvent.click(firstButton);
    expect(editAction).toBeCalledTimes(1);
    expect(editAction).toHaveBeenCalledWith(appointments[0].id);
  });
});
