import React from 'react';
import './style.css';

export class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'shouldComponentUpdate Method',
    };
    console.log('Constructor');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate Method');
    return false; //Change to true for state to update
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

  render() {
    console.log('This method is responsible to render our JSX to DOM');
    const name = this.state.name;
    return (
      <div>
        <h1>This is {name}</h1>
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
