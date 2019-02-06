import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Suk Joo Kim', age: 31},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 28}],
      otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DON'T DO THIS : this.state.persons[0].name = 'SJ full name'
    this.setState({persons:[
      {name: 'Max', age: 31},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      {name: 'Max', age: 31},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 27}]
  })}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello, Welcome to React App</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={()=> this.switchNameHandler('SJ!!!!!!')}>Switch Name</button>
        <Person 
        name = {this.state.persons[0].name} age ={this.state.persons[0].age} />
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!!')}
        changed={this.nameChangedHandler}
        > MyHobbies : Racing</Person>
        <Person 
        name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));

  }
}

export default App;
