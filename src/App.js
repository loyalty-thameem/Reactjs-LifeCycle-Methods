import React from 'react';
import './style.css';

export class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log('Constructor');
  }

  // handle API Example2
  componentDidMount() {
    console.log('componentDidMount Method');
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            data: data,
          });
        });
    }, 5000);
  }

  render() {
    console.log('This method is responsible to render our JSX to DOM');
    const datas = this.state.data;
    return (
      <div>
        <p>This will print all the name available in API users data</p>
        {datas.map((data) => (
          <h1 key={data.id}>{data.name}</h1>
        ))}
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
