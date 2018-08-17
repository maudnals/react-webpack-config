import React, { Component } from 'react';
import Users from './containers/Users';
import Mountain from './containers/Mountain';
import { Link, Route } from 'react-router-dom';

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
          <Route path="/mountain" exact component={Mountain}/>
        </div>
      </div>
    );
  }
}

export default App;
