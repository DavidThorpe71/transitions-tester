import React, { Component, Fragment } from 'react';
import './App.css';
import { Toggle } from 'components/utilities';
import { Modal } from 'components/elements';


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
