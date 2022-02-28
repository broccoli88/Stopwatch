
function stopwatch() {

  const startButton = document.querySelector(`#start`);
  const stopButton = document.querySelector(`#stop`);
  const resetButton = document.querySelector(`#reset`);

  const digit1 = document.querySelector(`#digit1`)
  const digit2 = document.querySelector(`#digit2`)
  const digit3 = document.querySelector(`#digit3`)
  const digit4 = document.querySelector(`#digit4`)

  let seconds1 = 0;
  let seconds2 = 0;
  let minutes1 = 0
  let minutes2 = 0;

  let interval;


  // * Functionality - timer

  function timer() {
    seconds1++

    if (seconds1 > 9) {
      seconds1 = 0
      seconds2++
    }

    if (seconds2 > 5) {
      seconds2 = 0
      minutes1++
    }

    if (minutes1 > 9) {
      minutes1 = 0
      minutes2++
    }

    if (minutes2 > 5) { minutes2 = 0 }

    digit1.textContent = `${seconds1}`
    digit2.textContent = `${seconds2}`
    digit3.textContent = `${minutes1}`
    digit4.textContent = `${minutes2}`
  }


  function start() {
    if (interval) return
    interval = setInterval(timer, 1000)
  }

  function stop() {
    clearInterval(interval)
    interval = null
  }

  function reset() {
    stop()
    seconds1 = 0;
    seconds2 = 0;
    minutes1 = 0;
    minutes2 = 0;

    digit1.textContent = `${seconds1}`
    digit2.textContent = `${seconds2}`
    digit3.textContent = `${minutes1}`
    digit4.textContent = `${minutes2}`
  }

  // * EventListeners - buttons

  startButton.addEventListener('click', () => {
    start()
  })

  stopButton.addEventListener('click', () => {
    stop()
  })

  resetButton.addEventListener('click', () => {
    reset()
  })

}

stopwatch()
