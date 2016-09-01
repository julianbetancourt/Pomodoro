import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, tick, pauseTimer, stopTimer } from '../actions';
import { msToMmSs } from '../utils/format';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);

    this.interval = null;
  }
  start() {
    this.props.startTimer(Date.now());
    this.interval = setInterval(() => {
      this.props.tick(Date.now())
    })
  }
  pause() {
    clearInterval(this.interval);
    this.props.pauseTimer();
  }
  stop() {
    clearInterval(this.interval);
    this.props.stopTimer();
  }

  render() {
    const { isOn, time } = this.props;
    return (
      <div className="timer">
        <div className="timer__clock">
          <h2>Working</h2>
          <span>{msToMmSs(time)}</span>
        </div>
        <div className="load-bar"><div className="load-bar__bar"></div></div>
        <div className="timer__control">
          <i className="ion-stop" onClick={this.stop}></i>
          <i className={isOn ? 'ion-pause' : 'ion-play'} onClick={isOn ? this.pause : this.start}></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.timer.time,
    isOn: state.timer.isOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: (offset) => dispatch(startTimer(offset)),
    tick: (time) => dispatch(tick(time)),
    pauseTimer: () => dispatch(pauseTimer()),
    stopTimer: () => dispatch(stopTimer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
