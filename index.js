//https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

var lastStrokeTime = null;
var lastStroke = null;

var handler = function (e) { 

	if(lastStrokeTime == null){
		lastStrokeTime = performance.now();
		lastStroke = e.charCode;
	}else{
		if(performance.now() -  lastStrokeTime <= 2000){
			// does the keystroke dictionairy has an 
			//entry for the keystroke before the current on?
			console.log(e.charCode);
			if(!keystrokes[lastStroke]){
				//if not, make one:
				keystrokes[lastStroke] = {};
				
			}
			//does the entry of the last keystroke, have an 
			// entry for the current on?
			if(!keystrokes[lastStroke][e.charCode]){
				//if not, add one with an array value:
				keystrokes[lastStroke][e.charCode] = [];
			}
			//at this point the array to hold the time difference, must exist. 
			//lets put the time in
			keystrokes[lastStroke][e.charCode].push(performance.now() -  lastStrokeTime);
			console.log(keystrokes);

		}




	}
	lastStrokeTime = performance.now();
	lastStroke = e.charCode;
    
 //    console.log(e);
 //    var stroke = (String.fromCharCode(e.charCode));
 //    var strokeTime = performance.now();	
 //    console.log(String.fromCharCode(e.charCode));
 //    console.log(performance.now());
   	

	// console.log(keystrokes);
	// console.log("last key: " + String.fromCharCode(lastStroke));
	// lastStroke = e.charCode;
}


// window.addEventListener("keyup",    handler); 
// window.addEventListener("keydown",  handler); 
window.addEventListener("keypress", handler);


console.log(keystrokes);
// console.log(keystrokes["c"]);
// console.log(keystrokes["c"]["a"]);
// console.log(keystrokes["c"]["a"][0]);
