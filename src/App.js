import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent'; 

const AsyncMountain = asyncComponent(() => {
  return import('./containers/Mountain.js');
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
          <Link to="/mountain">Mountains</Link>
        </div>
        <div>
          <Route path="/" exact component={Users}/>
          {/* mountain should be loazy loaded */}
          <Route path="/mountain" exact component={AsyncMountain}/>
        </div>
      </div>
    );
  }
}

export default App;
