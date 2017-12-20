import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './HomePage';
import Profile from './Profile';

class App extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/users/:username" exact component={Profile} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
