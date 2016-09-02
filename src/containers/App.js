import React, { Component } from 'react';
import Timer from './Timer';
import Settings from './Settings';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Pomodoro App</h1>
        <div className="app">
          <section className="main">
            <Timer />
          </section>
          <Settings />
        </div>        
      </div>
    );
  }
}

export default App;
