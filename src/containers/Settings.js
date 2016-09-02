import React, { Component } from 'react';
import { connect } from 'react-redux';
import { msToMm } from '../utils/format';
import { setLength } from '../actions';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.subtract = this.subtract.bind(this);
    this.add = this.add.bind(this);
    this.minute = 60000;
  }
  add(e) {
    const isWork = e.target.className === 'ion-plus plus-work' ? true : false;
    if ( isWork && this.props.workLength < this.minute * 59) {
      this.props.setLength('work', this.props.workLength + this.minute)
    } else if (!isWork && this.props.breakLength < this.minute * 20) {
      this.props.setLength('break', this.props.breakLength + this.minute)
    }
  }
  subtract(e) {
    const isWork = e.target.className === 'ion-minus minus-work' ? true : false;
    if ( isWork && this.props.workLength > this.minute) {
      this.props.setLength('work', this.props.workLength - this.minute)
    } else if (!isWork && this.props.breakLength > this.minute) {
      this.props.setLength('break', this.props.breakLength - this.minute)
    }
  }
  render() {
    const { workLength, breakLength, activityType } = this.props;
    return (
      <section className="controls">
        <div className="control">
          <i className="ion-minus minus-work" onClick={this.subtract}></i>
          <div className="control__number">
            <h3>{activityType === 'work' ? 'Working' : 'On Break'}</h3>
            <span>{msToMm(workLength)}</span>
          </div>
          <i className="ion-plus plus-work" onClick={this.add}></i>
        </div>
        <div className="control">
          <i className="ion-minus minus-break" onClick={this.subtract}></i>
          <div className="control__number">
            <h3>Break</h3>
            <span>{msToMm(breakLength)}</span>
          </div>
          <i className="ion-plus plus-break" onClick={this.add}></i>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workLength: state.timer.workLength,
    breakLength: state.timer.breakLength,
    activityType: state.timer.activityType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLength: (timerType, length) => dispatch(setLength(timerType, length))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
