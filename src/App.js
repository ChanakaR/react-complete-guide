import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './ComponentExample/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Wossrld!</h1>
        <Person name="Bob" age="34">Hello I am the children code</Person>
        <Person name="Alice" age="25"></Person>
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
