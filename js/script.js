function stopwatch() {}

let duration = 0;
let startTime = null;
let stopTime = null;
let started = false;

// START TIME

function start() {
  if (started === false) {
    started = true;
    startTime = Date.now();
    return startTime;
  } else {
    return `Counting already started.`;
  }
}

//STOP TIME

function stop() {
  stopTime = Date.now();
  if (started === true) {
    started = false;
    time = (stopTime - startTime) / 1000;
    duration += time;
    return stopTime;
  } else {
    return `Counting didn't start yet.`;
  }
}

//SHOW DURATION

function durationTime() {
  return duration;
}

//RESET TIME

function reset() {
  duration = 0;
  startTime = null;
  stopTime = null;
  started = false;
}
