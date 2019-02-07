import React, { Component } from 'react';
import classes from './App.css';
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

    let persons = null;
    let btnClass = '';

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
        
        btnClass = classes.Red;

 
    }

    let assignedClasses = [];  //"red bold"
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(this.state.persons.length <=1 ){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }


    return (
    
      <div className={classes.App}>
        <h1>Hello, Welcome to React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));

  }
}

export default App;
