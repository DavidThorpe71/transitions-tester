import React, { Component } from 'react';
import { UserContext } from '../contexts/UserContext';

class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <div>
            <h1>User Info</h1>
            <h3>{context.user.name}</h3>
            <h4>{context.user.email}</h4>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;