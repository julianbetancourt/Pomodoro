import React from 'react';

const TimerControls = ({stop, isOn, start, pause}) => {
  return (
    <div className="timer__control">
      <i className="ion-stop" onClick={stop}></i>
      <i className={isOn ? 'ion-pause' : 'ion-play'} onClick={isOn ? pause : start}></i>
    </div>
  );
}

export default TimerControls;
