import * as types from './actionTypes';

export const startTimer = (offset) => {
  return {
    type: types.START_TIMER,
    offset
  }
}

export const pauseTimer = () => {
  return {
    type: types.PAUSE_TIMER
  }
}

export const stopTimer = () => {
  return {
    type: types.STOP_TIMER
  }
}

export const tick = (time) => {
  return {
    type: types.TICK,
    time
  }
}

export const setLength = (timerType, length) => {
  return {
    type: types.SET_LENGTH,
    timerType,
    length
  }
}
