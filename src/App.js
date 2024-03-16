import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Users from './user/components/pages/Users';
import NewPlaces from './places/components/pages/NewPlaces';

const App = () => {
  return <Router>
      <Switch>
    <Route path='/' exact>
      <Users/>
    </Route>
    <Route path='/places/new' exact>
      <NewPlaces/>
    </Route>
    <Redirect to='/'/>
    </Switch>
  </Router>
}

export default App;
