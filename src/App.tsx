import * as React from 'react';
import './App.css';
import { Link } from 'react-router';

class App extends React.Component {
  public render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/game">GAME</Link></li>
          <li><Link to="/user">USER</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
