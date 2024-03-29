import React, { Component } from 'react';
import FirstComponent from "./components/learning-examples/FirstComponent"
import SecondCompnenet from "./components/learning-examples/SecondComponent"
import ThirdComponent from "./components/learning-examples/ThirdComponent"
import Counter from "./components/counter/Counter"
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Counter/>
        </div>
    );
  }
}

class LearningComponents extends Component{
  render() {
    return (
        <div className="LearningComponents">
          My Hello World
          <FirstComponent></FirstComponent>
          <SecondCompnenet></SecondCompnenet>
          <ThirdComponent></ThirdComponent>
        </div>
    );
  }
}

export default App;