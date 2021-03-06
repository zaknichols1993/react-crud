import React, { Component } from 'react';

import Users from './Users';
import AddUser from './AddUser';

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
      // If key and value are the same
      // you can use 
      // this.setState({users})
    })
  }

  addUser = (user) => {
    user.id = Math.random();
    let users = [...this.state.users, user];
    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div className="App container">
      <Users users={this.state.users} deleteUser={this.deleteUser}/>
      <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
