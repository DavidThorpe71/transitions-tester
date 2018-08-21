import React, { Component, Fragment } from 'react';
import Toggle from './components/ToggleRPC'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="test">test</p>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              {on && <h1>Show mme</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </Fragment>
          )}
        </Toggle>

      </div>
    );
  }
}

export default App;
