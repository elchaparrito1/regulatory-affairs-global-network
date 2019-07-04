import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from "../../client/src/pages/Home";
import CustomerHome from "../../client/src/pages/CustomerHome";
import ConsultantHome from "../../client/src/pages/ConsultantHome";
import history from "../src/history";


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/customer" component={CustomerHome}/>
            <Route exact path="/consultant" component={ConsultantHome}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
