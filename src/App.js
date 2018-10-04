import React, { Component } from 'react';

import People from './People';

class App extends Component {
  state = {
      people: [
        {id: 1, name: 'jack', gender: 'male'},
        {id: 2, name: 'jill', gender: 'female'}
      ]
  }

  deletePerson = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
      <People people={this.state.people} deletePerson={this.deletePerson}/>
      </div>
    );
  }
}

export default App;
