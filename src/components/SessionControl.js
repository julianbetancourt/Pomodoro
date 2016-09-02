import React from 'react';

const SessionControl = ({minusClass, plusClass, subtract, add, title, length}) => {
  return (
    <div className="control">
      <i className={minusClass} onClick={subtract}></i>
      <div className="control__number">
        <h3>{title}</h3>
        <span>{length}</span>
      </div>
      <i className={plusClass} onClick={add}></i>
    </div>
  );
}

export default SessionControl;
