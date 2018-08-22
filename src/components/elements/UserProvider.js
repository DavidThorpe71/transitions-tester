import React, { Component } from 'react';
import { UserContext } from '../contexts/UserContext';

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'David',
    email: 'dt@dt.com'
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default UserProvider;