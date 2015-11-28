var cnv;
var allKeys_keys = [];

var cellWidth = 20;
var cellHeight = 10;

var saveImg;
var img;
var b = false;
var url;

var keyVisualOption = 8;
var optionSlider;

function setup() {
  // lets see how many keys we have specified to "watch"
  // and assign them to the allKeys_keys array
  // in order to better be able to refer to them by number
  //full version below, this is all from the macbook keyboard.
  var keyorder = [
    
    "[esc]",
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",

    "[tab]",
    "q",
    "w",
    "e",
    "r",
    "t",

    "[caps]",
    "a",
    "s",
    "d",
    "f",
    "g",

    "[shift]",
    "z",
    "x",
    "c",
    "v",
    "b",

    "[ctrl]",
    "[alt]",
    "[cmd]",
    "[space]",



    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "[backspace]",

    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "[enter]",

    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "\\",

    "n",
    "m",
    ",",
    ".",
    "/",
    "[left]",
    "[up]",
    "[down]",
    "[right]"
    
    // "[cmd]",

  ]

  // uncomment to represent the keystrokes in order of physical location on the keyboard
  var keyRange = 0;
  for (var i = 0; i < keyorder.length; i++){
    print(keyorder[i]);
    print(allKeys["backspace"]);
    allKeys_keys[i] = allKeys[keyorder[i]];
    keyRange++;
  }

  print(allKeys_keys);

  //uncomment to represent the keys in order of keyCode
  // 
  // for (i in allKeysInOrder) {
  //   allKeys_keys[keyRange] = str(i);
  //   print(str(i));
  //   keyRange++;
  // }

  // if the canvas size should be almost fullscreen we make it depend on the amount of keys we "watch"
  // var w = windowWidth - (windowWidth % 62);
  // cnv = createCanvas( w , cellHeight * allKeys_keys.length);
  // cellWidth = w / 62;

  // //specifiy size of canvas
  var w = 850;
  var h = 250;
  cellWidth = w/keyRange;
  cellHeight = h/keyRange;
  cnv = createCanvas( w ,h);


  // cnv = createCanvas(cellWidth * allKeys_keys.length, cellHeight * allKeys_keys.length);
  cnv.background(0);

  // saveImg = createButton("save");
  // saveImg.mousePressed(saveTheImg);

  // url = createP(leonleon);
  optionSlider = createSlider(1, 8, 1);

}

function saveTheImg(){
  //for the follwoing i changed some lines in the p5.js library to get access to the images url. 
  saveCanvas('myKeyprint','jpg');
  url = createP(leonleon);
  // url.style("color: #FFFFFF")
  // img = createImage(100,100);
  // img.loadPixels();
  // for (i = 0; i < img.width; i++) {
  //   for (j = 0; j < img.height; j++) {
  //     img.set(i, j, color(0, 90, 102));
  //   }
  // } 
  // img.updatePixels();
  // b = true;


  // img = createImg('http://p5js.org/img/asterisk-01.png');
  
}

function draw() {
  background(0);

  for (var i = 0; i < allKeys_keys.length; i++) {
    if (data.keystrokes[allKeys_keys[i]]) {

      //this option is to stack them up, to also see overall if one key in partiular has a wait after it:
      var addUpWidth = 0;

      for (var j = 0; j < allKeys_keys.length; j++) {
        if (data.keystrokes[allKeys_keys[i]][allKeys_keys[j]]) {
          // print("lengt of this is: ");
          // print(keystrokes[allKeys_keys[i]][allKeys_keys[j]].length);
          // print("values are: ");
          var average = 0;
          var sum = 0;
          for(var k = 0; k < data.keystrokes[allKeys_keys[i]][allKeys_keys[j]].length; k++){
            // print(keystrokes[allKeys_keys[i]][allKeys_keys[j]][k]);
            sum = sum + data.keystrokes[allKeys_keys[i]][allKeys_keys[j]][k];
          }
          average = sum / data.keystrokes[allKeys_keys[i]][allKeys_keys[j]].length;
          // print("average is: ");
          // print(average);
        
          noStroke();

          // var greyTone = map(average, 0, 500000000, 100, 255);
          // var notBlueTone = greyTone;
          // if(greyTone >= 255){
          //   notBlueTone = map(average, 500000000, 1000000000, 255, 100);
          // }
          

          // fill(notBlueTone,notBlueTone,greyTone);

          // var redTone = 255;
          // // var greenTone = 0;
          // // var blueTone = 0;
          // var greenTone = map(average, 0,1000000000/5, 0, 255);
          // var blueTone = map(average, 0,1000000000/5, 0, 255);
          // if(average >= 1000000000 - (1000000000/4)){
          //   var redTone = map(average, 1000000000 - (1000000000/4),1000000000, 255, 0);
          //   var greenTone = map(average, 1000000000 - (1000000000/4),1000000000, 255, 0);
          //   // var blueTone = map(average, 0,1000000000/5, 0, 255);
          // }

          // var redTone = map(average, 0,1000000000/5, 255, 233);
          // // var greenTone = 0;
          // // var blueTone = 0;
          // var greenTone = map(average, 0,1000000000/5, 14, 233);
          // var blueTone = map(average, 0,1000000000/5, 83, 233);
          // if(average >= 1000000000 - (1000000000/4)){
          //   var redTone = map(average, 1000000000 - (1000000000/4),1000000000, 233, 0);
          //   var greenTone = map(average, 1000000000 - (1000000000/4),1000000000, 233, 93);
          //   var blueTone = map(average, 1000000000 - (1000000000/4),1000000000, 233, 255);
          // }
          


          //      0//////// 1000000000/10 //////// 2*(1000000000/10) //////// //////// //////// 1000000000/2 //////// //////// //////// //////// //////// 1000000000
          var th3 = 8 * (1000000000/10);
          var th2 = 2 * (1000000000/10);

          var redTone = 0;
          var greenTone = 0;
          var blueTone = 0;
          var opacity = 255;
          if (average >= th3){
            //blue:
            var redTone = map(average, th3,1000000000, 255, 0);
            var greenTone = map(average, th3,1000000000, 255, 0);
            var blueTone = 255;

          }else if (average >= th2){
            //white:
            var redTone = 255;
            var greenTone = 255;
            var blueTone = 255;
            var opacity = map(average, th2,th3, 100, 255);

          }else if (average >= 0){
            //red:
            var redTone = 255;
            var greenTone = map(average, th2 / 3,th2, 0, 255);
            var blueTone = map(average, th2 / 3,th2, 0, 255);
            var opacity = map(average, th2 - 10000,th2, 255, 100);

          }


          // if(redTone <= 0){
          //   // var redTone = map(average, 1000000000/3,2*(1000000000/3), 0, 255);
          //   var greenTone = map(average, 1000000000/3,2*(1000000000/3), 0, 255);
          //   var blueTone = map(average, 1000000000/3,2*(1000000000/3), 0, 255);
          // }

          fill(redTone, greenTone, blueTone,opacity);
          // fill(greyTone);
          stroke(255, 3);
          // strokeWeight(0.09);

          //line grid:

          if(keyVisualOption == 3){
            line(0,j * cellHeight + cellHeight/2, i * cellWidth,j * cellHeight + cellHeight/2);
            line(i * cellWidth, 0, i * cellWidth, j * cellHeight);
          } 
          noStroke();
          // interchangeing i and j in the folowoing rect defines the logic in which the rectangles are drawn. 
          // i find first j, then i more intuitiv together with the keystroke by physical location visualisation this results in this logic:
          // top left: rect appears here when a key from left half follows on a key from left half
          // top right: rect appears here when key of right half follows on a key from left half
          // bottom left: rect appear here when key from left half follows on a key from right half
          // bottom right: rect appears here when key from right half follows on a key from right half. 
          // tl:tr:
          // top left: left half >> left half
          // top right: left half >> right half
          // bottom left: right half > left half
          // bottom right: right half >> right half

          //option that was thought through is to use "cellWidth - map(average, 0, 1000000000, 0, cellWidth)" for the rectangles width
          // because more strokes are short and would therefore be "more visible". 
          // i think short and quick makes more sense to me. 
          
          if(keyVisualOption == 1 || keyVisualOption == 3 || keyVisualOption == 8){
            rect(j * cellWidth, i * cellHeight, map(average, 0, 1000000000, 0, cellWidth), cellHeight);  
          }
          
          if(keyVisualOption == 2){
            rect(j * cellWidth, i * cellHeight, cellWidth - map(average, 0, 1000000000, 0, cellWidth), cellHeight);
          }
          //this option is to stack them up, to also see overall if one key in partiular has a wait after it:
          if(keyVisualOption == 4 || keyVisualOption == 5 ||keyVisualOption == 6 || keyVisualOption == 7){
            rect(addUpWidth, i * cellHeight, map(average, 0, 1000000000, 0, cellWidth), cellHeight);
            addUpWidth = addUpWidth + map(average, 0, 1000000000, 0, cellWidth);      
          }
          if(keyVisualOption == 8){
            addUpWidth = addUpWidth + map(average, 0, 1000000000, 0, cellWidth);  
          }

        }else{
          // yet another way is to give boxes a certain colour if they have not been hit. 
           if(keyVisualOption == 5 ||keyVisualOption == 6 || keyVisualOption == 7){
            // var len = cellWidth;
            if(keyVisualOption == 7){
              var len = cellWidth;
            }
            // var len = 5;
            if(keyVisualOption == 6){
              var len = 2;
            }
            if(keyVisualOption == 5){
              var len = 2;
            }

            fill(0, 0, 0);
            stroke(100);
            strokeWeight(0.1);
            rect(addUpWidth, i * cellHeight,len, cellHeight);
            addUpWidth = addUpWidth + len;
          }
        }

      }
      if(keyVisualOption == 8){
        stroke(255,80);
        line(0, i * cellHeight, addUpWidth,i * cellHeight);
      }
    }

  }
  keyVisualOption = floor(optionSlider.value());
  // stroke(255);
  // text(str(floor(optionSlider.value())), 40,40);
  
}