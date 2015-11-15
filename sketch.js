var cnv;
var allKeys_keys = [];

var cellWidth = 20;
var cellHeight = 10;


function setup() {
  var count = 0;
  for (i in allKeys) {
    allKeys_keys[count] = str(i);
    count++;
  }
  for (var i = 0; i < allKeys_keys.length; i++) {
    print(allKeys_keys[i]);
  }



  cnv = createCanvas(cellWidth * allKeys_keys.length, cellHeight * allKeys_keys.length);
  cnv.background(0);


}

function draw() {
  background(0);

  for (var i = 0; i < allKeys_keys.length; i++) {
    if (keystrokes[allKeys_keys[i]]) {
      for (var j = 0; j < allKeys_keys.length; j++) {
        if (keystrokes[allKeys_keys[i]][allKeys_keys[j]]) {
          print("lengt of this is: ");
          print(keystrokes[allKeys_keys[i]][allKeys_keys[j]].length);
          print("values are: ");
          var average = 0;
          var sum = 0;
          for(var k = 0; k < keystrokes[allKeys_keys[i]][allKeys_keys[j]].length; k++){
            print(keystrokes[allKeys_keys[i]][allKeys_keys[j]][k]);
            sum = sum + keystrokes[allKeys_keys[i]][allKeys_keys[j]][k];
          }
          average = sum / keystrokes[allKeys_keys[i]][allKeys_keys[j]].length;
          print("average is: ");
          print(average);
        
          noStroke();
          var greyTone = map(average, 0, 500000000, 100, 255);
          var notBlueTone = greyTone;
          if(greyTone >= 255){
            notBlueTone = map(average, 500000000, 1000000000, 255, 100);
          }
          fill(notBlueTone,notBlueTone,greyTone);
          // fill(greyTone);
          rect(i * cellWidth, j * cellHeight, map(average, 0, 1000000000, 0, cellWidth), cellHeight);
        }
      }
    }

  }
}