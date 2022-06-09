import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    const toggle = this.state.show;
    return (
      <div>
        {toggle ? <Child /> : null}
        <button
          type="button"
          id="remove"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Click me to toggle
        </button>
      </div>
    );
  }
}
export class Child extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount Method');
    alert('button toggle name removed');
    document.getElementById('remove').innerHTML = 'My toggle name removed';
  }
  render() {
    return <div>{'I am a child component'}</div>;
  }
}
