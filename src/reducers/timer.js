import * as types from '../actions/actionTypes';
import initialState from './initialState';

const timer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_TIMER:
      return {
        ...state,
        isOn: true,
        offset: action.offset
      };
    case types.STOP_TIMER:
      return {
        ...state,
        isOn: false,
        time: state.workLength
      };
    case types.PAUSE_TIMER:
      return {
        ...state,
        isOn: false,
        time: state.time
      }
    case types.TICK:
      return {
        ...state,
        time: state.time - (action.time - state.offset),
        offset: action.time
      }
    case types.SET_LENGTH:
      const isWork = action.timerType === 'work' ? true : false;
      return {
        ...state,
        workLength: isWork ? action.length : state.workLength,
        time: isWork ? action.length : state.time,
        breakLength: !isWork ? action.length : state.breakLength
      }
    case types.CHANGE_ACTIVITY_TYPE:
      return {
        ...state,
        activityType: action.activityType,
        time: action.activityType === 'work' ? state.workLength : state.breakLength
      }
    default:
      return state;
  }
}

export default timer;
