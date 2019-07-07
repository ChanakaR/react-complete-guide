import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './ComponentExample/Person';
import UseStateExample from './ReactHooksExample/UseStateExample';

class App extends Component {
  /**
   * State example
   */
  state = {
    persons: [
      {name: "Bob", age: 25},
      {name: "Alice", age: 28},
      {name: "Ant", age: 35},
    ],
    otherStateValue: "This is the other state value",
  }

  switchNameHandler = ()=>{
    // console.log("hari machn badu wada");
    this.setState({
      persons: [
        {name: "Bobby", age: 21},
        {name: "Aliccy", age: 20},
        {name: "Antty", age: 39},
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hello I am the children code</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
        <p>{this.state.otherStateValue}</p>

        <UseStateExample></UseStateExample>
      </div>
    );

    /**
     * return (
        <div className="App">
          <h1>Hello Wossrld!</h1>
        </div>
        );
     * above code will be compiled to the below
     * return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I am Chanaka'));
     */
    
  }
}

export default App;
