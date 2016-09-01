export const msToMmSs = (ms) => {

  let milliseconds = parseInt((ms % 1000) / 100, 10),
    seconds = parseInt((ms / 1000) % 60, 10),
    minutes = parseInt((ms / (1000 * 60)) % 60, 10),
    hours = parseInt((ms / (1000 * 60 * 60)) % 24, 10);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
}
