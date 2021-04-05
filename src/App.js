import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 20},
      {name: "Maxefwa", age: 48}
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = () => {
    //alert('was clicked');
    this.setState({
      persons: [
        {name: "Maximillian", age: 28},
        {name: "Manu", age: 20},
        {name: "Maxefwa", age: 98}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a React App!</h1>
        <p>I'm working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
