import { render, screen, faker, userEvent, waitFor } from 'utils/tests/helpers';

import { UpdateAppointmentFormData } from 'types/appointments';
import { makeUpdateAppointmentFormData } from 'utils/tests/mocks/AppointmentMocks';

import UpdateAppointmentForm from '.';

describe('<UpdateAppointmentForm />', () => {
  const initialValues = {
    name: '',
    birth_date: new Date(),
    appointment_date: new Date(),
    vaccinated: false,
  };
  const handleSubmitSpy = jest.fn();
  const handleBackSpy = jest.fn();

  it('should render the UpdateAppointmentForm', () => {
    render(
      <UpdateAppointmentForm
        initialValues={initialValues}
        handleSubmit={handleSubmitSpy}
        handleBack={handleBackSpy}
        isLoading={false}
      />,
    );
    expect(screen.getByRole('textbox', { name: /nome/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /data de nascimento/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /data do agendamento/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: /vacinado/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /salvar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /voltar/i })).toBeInTheDocument();
  });

  it('should render the Loading state', () => {
    render(
      <UpdateAppointmentForm
        initialValues={initialValues}
        handleSubmit={handleSubmitSpy}
        handleBack={handleBackSpy}
        isLoading
      />,
    );
    expect(screen.getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });

  it('should render the Error state', async () => {
    render(
      <UpdateAppointmentForm
        initialValues={initialValues}
        handleSubmit={handleSubmitSpy}
        handleBack={handleBackSpy}
        isLoading={false}
        errorMsg="Some error"
      />,
    );

    expect(screen.getByText(/some error/i)).toBeInTheDocument();
  });

  it('should render the Empty state', async () => {
    render(
      <UpdateAppointmentForm
        initialValues={{} as UpdateAppointmentFormData}
        handleSubmit={handleSubmitSpy}
        handleBack={handleBackSpy}
        isLoading={false}
      />,
    );

    expect(screen.getByText(/sem dados/i)).toBeInTheDocument();
  });

  it('should display required error when value is invalid', async () => {
    render(
      <UpdateAppointmentForm
        initialValues={{
          name: '',
          birth_date: faker.date.future(),
          appointment_date: faker.date.past(),
          vaccinated: false,
        }}
        handleSubmit={handleSubmitSpy}
        handleBack={handleBackSpy}
        isLoading={false}
      />,
    );
    await waitFor(async () => {
      await userEvent.click(screen.getByRole('button', { name: /salvar/i }));
    });
    expect(await screen.findAllByRole('alert')).toHaveLength(3);
    expect(handleSubmitSpy).not.toBeCalled();
  });

  it('should not display error when value is valid', async () => {
    const formDate = makeUpdateAppointmentFormData();
    render(
      <UpdateAppointmentForm
        initialValues={formDate}
        handleSubmit={handleSubmitSpy}
        handleBack={handleBackSpy}
        isLoading={false}
      />,
    );

    await waitFor(async () => {
      await userEvent.click(screen.getByRole('button', { name: /salvar/i }));
    });

    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    expect(handleSubmitSpy).toBeCalledWith(formDate);
  });
});
