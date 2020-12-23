// Allison Obourn
// CSC 337, Fall 2018
// lecture 8

// This program starts a timer countdown displayed on the screen
// that counts down every second until 0 minutes and 0 seconds are left
// It then displays a times up message on the page

"use strict";

(function() {
	let timer = null;
  let beat1 = new Audio('beat1.wav');
  let beat2 = new Audio('beat2.wav');
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
    beat(beatDuration);
  }

  function beat(beatDuration) {
		timer = setTimeout(() => {
      if (counter == 1) {
        beat1.play();
        counter++;
        setTimeout(beat, beatDuration*1.5, beatDuration)
      } else if (counter <= beatNumber){
        beat2.play();
        counter++;
        if (counter == beatNumber+1) {
          counter = 1;
        }
        setTimeout(beat, beatDuration, beatDuration)
      }
    })
	}

})();
