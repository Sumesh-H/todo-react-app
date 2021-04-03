import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          My Hello World
          <FirstComponent></FirstComponent>
          <SecondCompnenet></SecondCompnenet>
        </div>
    );
  }
}
//Class Component
class FirstComponent extends Component {
  render() {
    return (
        <div className="firstComponent">
          FirstComponent
        </div>
    );
  }
}
class SecondCompnenet extends Component {
  render() {
    return (
        <div className="secondComponent">
          SecondCompnenet
        </div>
    );
  }
}
export default App;