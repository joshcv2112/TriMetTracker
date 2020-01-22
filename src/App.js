import React, { Component } from 'react';
import TransitRoutes from './transit_routes';
import Nav from './nav';
import Alerts from './alerts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>HOMEPAGE</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/transit_routes" component={TransitRoutes}/>
            <Route path="/alerts" component={Alerts}/>
          </Switch>
        </div>
      </Router>
   );
  }
}

export default App; 