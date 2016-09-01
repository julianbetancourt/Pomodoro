import * as types from '../actions/actionTypes';
import initialState from './initialState';

const timer = (state = initialState.timer, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        isOn: true,
        offset: action.offset
      };
    case types.STOP_TIMER:
      return {
        isOn: false,
        time: 1500000
      };
    case types.PAUSE_TIMER:
      return {
        isOn: false,
        time: state.time
      }
    case types.TICK:
      return {
        ...state,
        time: state.time - (action.time - state.offset),
        offset: action.time
      }
    default:
      return state;
  }
}

export default timer;
