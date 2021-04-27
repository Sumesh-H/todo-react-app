import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css';

//Function Counter
class Counter extends Component{
    constructor(){ // to initialize state
        super() //Always call super to use "this." in JS6
        this.state= { //state is equivalent to logic in Java
            counter : 0 //counter variable
        }
        this.increment = this.increment.bind(this); 
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    render() {
        return (
            <div className="counter">
              <CounterButton by={1} incrementMethod = {this.increment} decrementMethod = {this.decrement} />
              <CounterButton by= {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
              <CounterButton by= {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
              <span className="count">{this.state.counter}</span>
              <div><button className="reset" onClick={this.reset}> Reset</button></div>
            </div>
        );
      }
    //reset to zero
    reset(){
          this.setState({counter : 0}
          )}
    
    /*
    Note: 
    Increment and Decrement state
    console.log(`increment from child - ${by}`)
    increment = () =>//Use arrow function for binding
    console.log('increment')
    this.state.counter++; - Bad Practicing, always use setState() to update the state
    */

    increment (by){ 
        this.setState(
           (prevState) => { 
            return {counter : prevState.counter + by} // create property to increment counter
        });
    } 
    decrement (by){ 
        this.setState(
           (prevState) => { 
            return {counter : prevState.counter - by}// create property to decrement counter
        });
    } 
}

class CounterButton extends Component{
    
    //Define the initial state in a constructor
    //state => counter 0
    constructor(){ 
        super()
        this.state= { 
            counter : 0 
        }
    }
    render() {
    /*
    render = () => {
    const counterStyle = {fontSize: "50px", padding: "15px 30px"} 
    Inline css using javaScript code, use {{}} to implement javaScript code, "-" is not allowed in javasScript 
    */ 
        return(
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter