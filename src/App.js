import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Suk Joo Kim', age: 31},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 28}]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, Welcome to React App</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name = {this.state.persons[0].name} age ={this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}> MyHobbies : Racing</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));

  }
}

export default App;
