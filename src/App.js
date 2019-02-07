import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 'asf1',name: 'Suk Joo Kim', age: 31},
      {id: 'fee2',name: 'Manu', age: 29},
      {id: 'afs1',name: 'Stephanie', age: 28}],
      otherState: 'some other value',
      showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}
    //const person = Object.assign({}, this.state.persons[personIndex]); //alternative
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({persons: persons})}

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons] // betterh than just =  this.state.persons (it could influence the original value due to persons refering only pointer not the copy of vlaues themselves)
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
       const doesShow = this.state.showPersons;
       this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
       persons = (
          <div>
          {this.state.persons.map((person, index) => {
            return <Person click={()=> this.deletePersonHandler(index)} 
            name ={person.name} 
            age={person.age}
            key={person.id}
            changed= {(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
         </div> 
        );
        style.backgroundColor = 'red';
        style[':hover'] =  {
          backgroundColor: 'salmon',
          color: 'black'
        }
    }

    let classes = [];  //"red bold"
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <=1 ){
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <StyleRoot>
      <div className="App">
        <h1>Hello, Welcome to React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));

  }
}

export default Radium(App);
