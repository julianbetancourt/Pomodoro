import React, { Component } from 'react';
import { connect } from 'react-redux';
import { msToMm } from '../utils/format';
import { setLength } from '../actions';
import SessionControl from '../components/SessionControl';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.subtract = this.subtract.bind(this);
    this.add = this.add.bind(this);
    this.minute = 60000;
  }
  add(e) {
    const isButtonWork = e.target.className === 'ion-plus plus-work' ? true : false;
    const isActivityWork = this.props.activityType === 'work' ? true : false;

    if ( isButtonWork && this.props.workLength < this.minute * 59 && !this.props.isOn && isActivityWork) {
      this.props.setLength('work', this.props.workLength + this.minute)
    } else if (!isButtonWork && this.props.breakLength < this.minute * 20 && !this.props.isOn) {
      this.props.setLength('break', this.props.breakLength + this.minute)
    }
  }
  subtract(e) {
    const isButtonWork = e.target.className === 'ion-minus minus-work' ? true : false;
    const isActivityWork = this.props.activityType === 'work' ? true : false;

    if ( isButtonWork && this.props.workLength > this.minute && !this.props.isOn && isActivityWork) {
      this.props.setLength('work', this.props.workLength - this.minute)
    } else if (!isButtonWork && this.props.breakLength > this.minute && !this.props.isOn) {
      this.props.setLength('break', this.props.breakLength - this.minute)
    }
  }
  render() {
    const { workLength, breakLength } = this.props;
    return (
      <section className="controls">
        <SessionControl
          minusClass='ion-minus minus-work'
          plusClass='ion-plus plus-work'
          subtract={this.subtract}
          add={this.add}
          title='Work'
          length={msToMm(workLength)} />
        <SessionControl
          minusClass='ion-minus minus-break'
          plusClass='ion-plus plus-break'
          subtract={this.subtract}
          add={this.add}
          title="Break"
          length={msToMm(breakLength)} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workLength: state.timer.workLength,
    breakLength: state.timer.breakLength,
    activityType: state.timer.activityType,
    isOn: state.timer.isOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLength: (timerType, length) => dispatch(setLength(timerType, length))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
