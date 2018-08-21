import React, { Component, Fragment } from 'react';
import Toggle from './components/ToggleRPC'
import './App.css';
import Portal from './components/Portal';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MASSIVE HEADER</h1>
        <p className="test">test</p>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Still</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
