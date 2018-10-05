import React, { Component } from 'react';

import Users from './Users';

class App extends Component {
  state = {
      users: [
        {id: 1, name: 'jack', gender: 'male'},
        {id: 2, name: 'jill', gender: 'female'}
      ]
  }

  deleteUser = (id) => {
    const users = this.state.users.filter(user => {
      return user.id !== id
    });
    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div className="App">
      <Users users={this.state.users} deleteUser={this.deleteUser}/>
      </div>
    );
  }
}

export default App;
