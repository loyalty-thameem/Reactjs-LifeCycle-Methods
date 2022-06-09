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
  // we are changing our initial state of name inside the constructor method to props which we are receiving in getDerivedStateFromProps
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps Method');
  //   return {
  //     name: props.nameFromParent,
  //   };
  // }
  // handle API Example1
  componentDidMount() {
    console.log('componentDidMount Method');
    setTimeout(() => {
      this.setState({
        name: 'componentDidMount Method',
      });
    }, 5000);
  }
  render() {
    console.log('This method is responsible to render our JSX to DOM');
    const name = this.state.name;
    return (
      <div>
        <p>This is {name} </p>
      </div>
    );
  }
}
export default class App extends React.Component {
  render() {
    console.log('Render from parent');
    return (
      <div>
        <ChildComponent nameFromParent="getDerivedStateFromProps Method" />
      </div>
    );
  }
}
