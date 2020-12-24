

"use strict";

(function() {
	let timer = null;
  let beat1 = new Audio('beat1a.mp3');
  let beat2 = new Audio('beat2a.mp3');
  let counter = 1;
  let beatNumber = 3;

	/**
	* connects the button to a function that starts the timer
	*/
	window.onload = function() {
		let start = document.getElementById("startButton");
		start.onclick = startMetronome;
	};


	/**
	* starts a timer which goes off every second as long as no other
	* timer is already set
	*/
	function startMetronome() {
    let beatNumberInput = document.getElementById("beatNumber").value;
    if (beatNumberInput != "") {
      beatNumber = parseInt(beatNumberInput);
    }

    let bpm = document.getElementById("bpm").value;
    if (bpm == "") {
      bpm = 160;
    }

    const beatDuration = 60000/bpm;
    if (timer != null) {
      clearTimeout(timer);
      timer = null;
    }

    beat(beatDuration);
  }

  function beat(beatDuration) {
		timer = setTimeout(() => {
      if (counter == 1) {
        beat1.currentTime = 0;
        beat1.play();
        counter++;
        timer = setTimeout(beat, beatDuration*1.5, beatDuration)
      } else if (counter <= beatNumber){
        beat2.currentTime = 0;
        beat2.play();
        counter++;
        if (counter == beatNumber+1) {
          counter = 1;
        }
        timer = setTimeout(beat, beatDuration, beatDuration)
      }
    })
	}

})();
