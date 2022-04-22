import { render, screen, userEvent, waitFor } from 'utils/tests/helpers';
import { makeCreateAppointmentFormData } from 'utils/tests/mocks/AppointmentMocks';

import CreateAppointmentForm from '.';

describe('<CreateAppointmentForm />', () => {
  const initialValues = {
    name: '',
    birth_date: new Date(),
    appointment_date: new Date(),
  };
  const handleSubmitSpy = jest.fn();
  const handleBackSpy = jest.fn();
  const setAppointmentInStorageSpy = jest.fn();

  it('should render the CreateAppointmentForm', () => {
    render(
      <CreateAppointmentForm
        handleSubmit={handleSubmitSpy}
        initialValues={initialValues}
        handleBack={handleBackSpy}
        setAppointmentInStorage={setAppointmentInStorageSpy}
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
      screen.getByRole('button', { name: /agendar/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /voltar/i })).toBeInTheDocument();
  });

  it('should display required error when value is invalid', async () => {
    render(
      <CreateAppointmentForm
        handleSubmit={handleSubmitSpy}
        initialValues={initialValues}
        handleBack={handleBackSpy}
        setAppointmentInStorage={setAppointmentInStorageSpy}
      />,
    );
    await waitFor(async () => {
      await userEvent.click(screen.getByRole('button', { name: /agendar/i }));
    });
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(handleSubmitSpy).not.toBeCalled();
  });

  it('should not display error when value is valid', async () => {
    const formDate = makeCreateAppointmentFormData();
    render(
      <CreateAppointmentForm
        handleSubmit={handleSubmitSpy}
        initialValues={formDate}
        handleBack={handleBackSpy}
        setAppointmentInStorage={setAppointmentInStorageSpy}
      />,
    );

    await waitFor(async () => {
      await userEvent.click(screen.getByRole('button', { name: /agendar/i }));
    });

    expect(screen.queryAllByRole('alert')).toHaveLength(0);
    expect(handleSubmitSpy).toBeCalledWith(formDate);
  });
});
