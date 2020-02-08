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

// NOT SURE WHAT THIS IS EXACTLY, BUT IT GIVES STYLE TO THE SEMANTIC UI DROPDOWN I MADE
// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App; 