import { Route, Routes as Switch } from 'react-router-dom';

import Base from 'templates/Base';
import Home from 'pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Base />}>
        <Route element={<Home />} index />
      </Route>
    </Switch>
  );
};

export default Routes;
