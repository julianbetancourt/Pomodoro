export const msToMmSs = (ms) => {

  let seconds = parseInt((ms / 1000) % 60, 10),
      minutes = parseInt((ms / (1000 * 60)) % 60, 10);

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
}

export const msToMm = (ms) => {

  let minutes = parseInt((ms / (1000 * 60)) % 60, 10);

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  
  return minutes;
}
