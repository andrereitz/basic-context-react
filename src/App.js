import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Person as ThePerson } from './components/Person';
import { Family } from './components/Family';

import { MyProvider } from './contexts';

class App extends React.Component{
  render(){
    console.log(this.state)
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit  teste<code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
