//https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
//http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

var lastStrokeTime = null;
var lastStroke = null;


var handler = function (e) { 
	console.log(e);

	if(lastStrokeTime == null){
		lastStrokeTime = performance.now();
		lastStroke = e.keyCode;
	}else{
		if(performance.now() -  lastStrokeTime <= 2000){
			// does the keystroke dictionairy has an 
			//entry for the keystroke before the current on?
			console.log(e.keyCode);
			if(!keystrokes[lastStroke]){
				//if not, make one:
				keystrokes[lastStroke] = {};
				
			}
			//does the entry of the last keystroke, have an 
			// entry for the current on?
			if(!keystrokes[lastStroke][e.keyCode]){
				//if not, add one with an array value:
				keystrokes[lastStroke][e.keyCode] = [];
			}
			//at this point the array to hold the time difference, must exist. 
			//lets put the time in
			keystrokes[lastStroke][e.keyCode].push(performance.now() -  lastStrokeTime);
			console.log(keystrokes);
		}

	}
	lastStrokeTime = performance.now();
	lastStroke = e.keyCode;
    
}

//keydown
//keypress
window.addEventListener("keydown", handler);




console.log(keystrokes);


//to write lines below the text box
function writeNewLine(text){
	var node = document.createElement("p"); 
	var textnode = document.createTextNode(text + ","); 
	node.appendChild(textnode);  
	document.getElementById("myList").appendChild(textnode); 
} 