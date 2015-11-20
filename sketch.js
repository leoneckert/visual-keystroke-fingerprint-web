var cnv;
var allKeys_keys = [];

var cellWidth = 20;
var cellHeight = 10;


function setup() {
  // lets see how many keys we have specified to "watch"
  // and assign them to the allKeys_keys array
  // in order to better be able to refer to them by number
  var keyRange = 0;
  for (i in allKeys) {
    allKeys_keys[keyRange] = str(i);
    keyRange++;
  }
  // if the canvas size should be almost fullscreen we make it depend on the amount of keys we "watch"
  var w = windowWidth - (windowWidth % 62);
  cnv = createCanvas( w , cellHeight * allKeys_keys.length);
  cellWidth = w / 62;

  // //specifiy size of canvas
  // var w = 650;
  // var h = 400;
  // cellWidth = w/keyRange;
  // cellHeight = h/keyRange;
  // cnv = createCanvas( w ,h);


  // cnv = createCanvas(cellWidth * allKeys_keys.length, cellHeight * allKeys_keys.length);
  cnv.background(0);


}

function draw() {
  background(0);

  for (var i = 0; i < allKeys_keys.length; i++) {
    if (keystrokes[allKeys_keys[i]]) {
      for (var j = 0; j < allKeys_keys.length; j++) {
        if (keystrokes[allKeys_keys[i]][allKeys_keys[j]]) {
          // print("lengt of this is: ");
          // print(keystrokes[allKeys_keys[i]][allKeys_keys[j]].length);
          // print("values are: ");
          var average = 0;
          var sum = 0;
          for(var k = 0; k < keystrokes[allKeys_keys[i]][allKeys_keys[j]].length; k++){
            // print(keystrokes[allKeys_keys[i]][allKeys_keys[j]][k]);
            sum = sum + keystrokes[allKeys_keys[i]][allKeys_keys[j]][k];
          }
          average = sum / keystrokes[allKeys_keys[i]][allKeys_keys[j]].length;
          // print("average is: ");
          // print(average);
        
          noStroke();
          var greyTone = map(average, 0, 500000000, 100, 255);
          var notBlueTone = greyTone;
          if(greyTone >= 255){
            notBlueTone = map(average, 500000000, 1000000000, 255, 100);
          }
          fill(notBlueTone,notBlueTone,greyTone);
          // fill(greyTone);
          stroke(255, 12);
          // strokeWeight(0.09);
          line(0,j * cellHeight + cellHeight/2, i * cellWidth,j * cellHeight + cellHeight/2);
          line(i * cellWidth, 0, i * cellWidth, j * cellHeight);
          noStroke();
          rect(i * cellWidth, j * cellHeight, map(average, 0, 1000000000, 0, cellWidth), cellHeight);
        }
      }
    }

  }
}