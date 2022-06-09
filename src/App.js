import React from 'react';
import './style.css';

export class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'from previous state',
    };
    console.log('Constructor');
  }

  // handle
  componentDidMount() {
    console.log('componentDidMount Method');
    setTimeout(() => {
      this.setState({
        name: 'from current state',
      });
    }, 5000);
  }

  //==========Current State
  componentDidUpdate(prevState) {
    console.log('componentDidUpdate Method final ender');
    if (prevState.name != this.state.name)
      document.getElementById('state-change').innerHTML =
        'Yes, the state is changed';
  }
  //============== change DOM Example 1
  componentWillUnmount() {
    console.log('componentWillUnmount');
    setTimeout(() => {
      document.getElementById('state-change').innerHTML =
        'I am componentWillUnmount';
    }, 10000);
  }
  render() {
    console.log('This method is responsible to render our JSX to DOM');
    const name = this.state.name;
    return (
      <div>
        <h1>This is {name}</h1>
        <p id="state-change"></p>
      </div>
    );
  }
}
export default class App extends React.Component {
  render() {
    console.log('Render from parent');
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }
}
