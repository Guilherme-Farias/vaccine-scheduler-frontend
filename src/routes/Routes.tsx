import { Route, Routes as Switch } from 'react-router-dom';

import Base from 'templates/Base';
import Home from 'pages/Home';
import Appointments from 'pages/Appointments';
import CreateAppointment from 'pages/CreateAppointment';
import UpdateAppointment from 'pages/UpdateAppointment';
import Error404 from 'pages/Error404';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Base />}>
        <Route element={<Home />} index />
        <Route path="/agendamentos">
          <Route element={<Appointments />} index />
          <Route path="novo" element={<CreateAppointment />} />
          <Route path=":id/editar" element={<UpdateAppointment />} />
        </Route>
        <Route element={<Error404 />} path="*" />
      </Route>
    </Switch>
  );
};

export default Routes;
