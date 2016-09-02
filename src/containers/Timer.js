import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, tick, pauseTimer, stopTimer, changeActivityType } from '../actions';
import { msToMmSs } from '../utils/format';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
    this.calculatePercentage = this.calculatePercentage.bind(this);

    this.interval = null;

  }
  componentDidUpdate() {
    document.title = msToMmSs(this.props.time) + ' - ' + this.props.activityType;
  }
  start() {
    this.props.startTimer(Date.now());
    this.interval = setInterval(() => {
      this.props.tick(Date.now())
      if (this.props.time <= 0) {
        if (this.props.activityType === 'work') {
          this.props.changeActivityType('break');
          //clearInterval(this.interval);
          //this.start();
        } else {
          this.props.changeActivityType('work');
        }
      }
    })
  }
  pause() {
    clearInterval(this.interval);
    this.props.pauseTimer();
  }
  stop() {
    clearInterval(this.interval);
    this.props.stopTimer();
    this.props.changeActivityType('work');
  }
  calculatePercentage() {
    if (this.props.activityType === 'work') {
      const percent1 = ((this.props.workLength - this.props.time) * 100) / this.props.workLength;
      return percent1 + '%';
    } else {
      const percent2 = ((this.props.breakLength - this.props.time) * 100) / this.props.breakLength;
      return percent2 + '%';
    }
  }

  render() {
    const { isOn, time, activityType } = this.props;
    return (
      <div className="timer">
        <div className="timer__clock">
          <h2>{activityType === 'work' ? 'Working' : 'On Break'}</h2>
          <span>{msToMmSs(time)}</span>
        </div>
        <div className="load-bar">
          <div className="load-bar__bar" style={{"width": this.calculatePercentage()}}></div>
          </div>
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
    isOn: state.timer.isOn,
    activityType: state.timer.activityType,
    workLength: state.timer.workLength,
    breakLength: state.timer.breakLength
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: (offset) => dispatch(startTimer(offset)),
    tick: (time) => dispatch(tick(time)),
    pauseTimer: () => dispatch(pauseTimer()),
    stopTimer: () => dispatch(stopTimer()),
    changeActivityType: (activityType) => dispatch(changeActivityType(activityType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
