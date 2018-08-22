import React, { Component, Fragment } from 'react';
import './App.css';
import { Toggle } from 'components/utilities';
import { Modal } from 'components/elements';
import User from './components/elements/User'
import { UserContext } from './components/contexts/UserContext';

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'David',
    email: 'dt@dt.com'
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <h1>MASSIVE HEADER</h1>
          <p className="test">test</p>
          <User />
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
      </UserProvider>
    );
  }
}

export default App;
