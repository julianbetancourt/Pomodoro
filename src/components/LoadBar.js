import React from 'react';

const LoadBar = ({percent}) => {
  return (
    <div className="load-bar">
      <div className="load-bar__bar" style={{"width": percent}}></div>
    </div>
  );
}

export default LoadBar;
