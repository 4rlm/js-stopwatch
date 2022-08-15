window.onload = function() {
  var [seconds, tens] = [0, 0]
  var secondsElem = document.getElementById('seconds');
  var tensElem = document.getElementById('tens');
  var startButton = document.getElementById('startButton');
  var stopButton = document.getElementById('stopButton');
  var resetButton = document.getElementById('resetButton');
  var int = null;
  
  //start button clears then sets and assigns interval with timer and 10 to int
  startButton.onclick = function() {
    clearInterval(int);
    int = setInterval(startTimer, 100);
  }
  
  //stop button clears interval
  stopButton.onclick = function() {
    clearInterval(int);
  }
  
  //reset interval clears and sets seconds/tens to 00, and appends
  resetButton.onclick = function() {
    clearInterval(int);
    [seconds, tens] = ["00", "00"];
    appendSeconds(seconds);
    appendTens(tens);
  }
  
  //timer increments/formats/appends tens (<10), then seconds(>99), (>9)
  function startTimer() {
    tens++
    if (tens < 10) tens = '0' + tens;
    appendTens(tens);
  
  //if tens > 99, increment seconds, tens = 0, append seconds and tens
    if (tens > 99) {
      seconds++;
      tens = '00';
      appendSeconds('0' + seconds);
      appendTens(tens);
    }
    
    // if seconds > 9 append seconds
    if (seconds > 9) appendSeconds(seconds);
  }
  
  // function to append tens to innerHTML
  function appendTens(num) {
    tensElem.innerHTML = num;
  }
  
  // function to append seconds to innerHTML
  function appendSeconds(num) {
    secondsElem.innerHTML = num;
  }
  
  
  }
  

