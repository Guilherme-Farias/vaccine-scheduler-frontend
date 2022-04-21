import { Route, Routes as Switch } from 'react-router-dom';

import Base from 'templates/Base';
import Home from 'pages/Home';
import Appointments from 'pages/Appointments';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Base />}>
        <Route element={<Home />} index />
        <Route path="/agendamentos">
          <Route element={<Appointments />} index />
        </Route>
      </Route>
    </Switch>
  );
};

export default Routes;
