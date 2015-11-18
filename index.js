// nano seconds: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
// keyCodes: http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

var lastStrokeTime = null;
var lastStroke = null;
var threshold = 1000 //in milli seconds


var handler = function (e) { 
	// print keydown event:
	// console.log(e);

	// print keyCode and key of key pressed:
	console.log("key pressed.")
	console.log("KeyCode: " + e.keyCode)
	console.log("Key: " + String.fromCharCode(e.keyCode));

	// check if it is the very first key pressed:
	if(lastStrokeTime == null){
		// if yes, that's our first "lastStroke"
		lastStrokeTime = performance.now();
		lastStroke = e.keyCode;

		console.log("--> not in array bc first letter pressed");
	}else{
		//if it is not the first key pressed,
		// we check wether the last key pressed before this one
		// was longer ago than our threshold (here still in miliseconds)
		// here the measurment is still milli seconds, defined outsie this function
		if(performance.now() -  lastStrokeTime <= threshold){
			// if there was not too much time between the two keystrokes
			// this means whatever time we measure is relevant for lastStroke
			// because that's where we "are coming from".
			// lets check if lastStroke is already in the array;
			console.log("--> in array");
			if(!keystrokes[lastStroke]){
				//if not, make, we make an entry:
				keystrokes[lastStroke] = {};
				
			}
			
			// next we check if the entry of lastStroke 
			// already has an entry for the current stroke. 
			if(!keystrokes[lastStroke][e.keyCode]){
				//if not, add one with an array the value:
				keystrokes[lastStroke][e.keyCode] = [];
			}
			//at this point the array to store the time difference between the two keystrokes into the array.
			//lets put the time in, making it nanoseconds
			keystrokes[lastStroke][e.keyCode].push(1000000 * (performance.now() -  lastStrokeTime));

			//print the updated array:
			console.log(keystrokes);

		}else{
			// if the time between the two strokes was longer than the threshold defined,
			// we explain that on the console
			console.log("--> not in array bc last keystroke was more than" + threshold + " milli seconds ago.");
		}

	}
	// lastly after the whole operation, 
	// we update the values of lastStroke and lastStrokeTime:
	lastStrokeTime = performance.now();
	lastStroke = e.keyCode;
    
}

// other key events: keydown, keypress
window.addEventListener("keydown", handler);

