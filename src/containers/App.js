import React, { Component } from 'react';
import Timer from './Timer';
import Settings from './Settings';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isOn, activityType } = this.props;
    return (
      <div className={!isOn ? 'container stopped' : activityType === 'work' ? 'container working' : 'container onBreak'}>
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

const mapStateToProps = (state) => {
  return {
    isOn: state.timer.isOn,
    activityType: state.timer.activityType
  }
}

export default connect(mapStateToProps, null)(App);
