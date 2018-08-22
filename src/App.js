import React, { Component, Fragment } from 'react';
import './App.css';
import { Toggle } from './components/utilities';
import { Modal, Card } from './components/elements';
import User from './components/elements/User'
import UserProvider from './components/elements/UserProvider';
import { Transition } from 'react-spring';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <h1>MASSIVE HEADER</h1>
          <p className="test">test</p>
          <User />
          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition
                    from={{ opacity: 0, bg: `#82d8d8`, height: '0px' }}
                    enter={{ opacity: 1, bg: `#524763`, height: '200px' }}
                    leave={{ opacity: 0, bg: `#82d8d8`, height: '0px' }}
                  >
                    {on && Header}

                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still herrre</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card style={{
    opacity: styles.opacity,
    backgroundColor: styles.bg,
    overflow: 'hidden',
    height: styles.height
  }}>
    <h1 >Show me</h1>
    <h3>{styles.bg}</h3>
  </Card>
)

export default App;
