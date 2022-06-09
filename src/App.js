import React from 'react';
import './style.css';

export class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Constructor Method',
    };
    console.log('Constructor');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate Method');
    return true; //Change to false for state to no update
  }
  // handle
  componentDidMount() {
    console.log('componentDidMount Method');
    setTimeout(() => {
      this.setState({
        name: 'componentDidMount Method',
      });
    }, 5000);
  }
  //=========Previous state
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUdpate Method');
    return (document.getElementById('previous-state').innerHTML =
      'The previous state was ' + prevState.name);
  }
  //==========Current State
  componentDidUpdate() {
    console.log('componentDidUpdate Method');
    document.getElementById('current-state').innerHTML =
      'This current state was ' + this.state.name;
  }
  render() {
    console.log('This method is responsible to render our JSX to DOM');
    const name = this.state.name;
    return (
      <div>
        <h1>This is {name}</h1>
        <p id="previous-state"></p>
        <p id="current-state"></p>
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
