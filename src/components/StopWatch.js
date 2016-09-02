import React from 'react';

const StopWatch = ({activityType, time}) => {
  return (
    <div className="timer__clock">
      <h2>{activityType === 'work' ? 'Working' : 'On Break'}</h2>
      <span>{time}</span>
    </div>
  );
}

export default StopWatch;
