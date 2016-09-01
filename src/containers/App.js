import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="main">
          <Timer />
        </section>
      </div>
    );
  }
}

export default App;
