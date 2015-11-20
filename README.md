# Visual Keystroke Fingerprint 

[work-in-progress demo](http://itp.leoneckert.com/icm/finals/progress_1/)

## What’s a keystroke fingerprint?

1. <b>Example:</b> you type the word “Hello”.

2. There is time passing between every two keys you press, not a lot, but in nano seconds it can be measured fairly precisely. 

3. <b>Example:</b>	
			
			You type:		“H”
						
						43 700 000 nano seconds pass
			
			Then you type:	“e”
			
						61 050 000 nano seconds pass

			Then you type: “l”

			. . . 

4. Imagine you always measured that time passing between your keystrokes and calculated the average for every key pair. 

5. <b>Example:</b> of the 500 000 times you typed first “H”, then “e”, the average time that passed in between the two keystrokes was 32 102 301 nano seconds. 

6. Imagine such an average measurement for every combination of two keys on your keyboard. 
	———> 	That data is your keystroke fingerprint.<br> 
	———> 	It’s unique to you.<br> 
	———> 	No one else in the world types the way you do. 					

![Visualised Fingerprints](https://github.com/leoneckert/visual-keystroke-fingerprint-web/blob/master/raw_fingerprint.png)


### for now:
This project’s first goal is to visualise such keystroke fingerprints to make them comparable and highlight their uniqueness. This is in progress and not yet finalised. 

![Visualised Fingerprints](https://github.com/leoneckert/visual-keystroke-fingerprint-web/blob/master/vkf_1.gif)


### what next:
The next step will be to implement a obfuscation system that makes it harder for other parties to collect that personal data of ours, by slightly shifting the times at which keystroke signals reach the system. At the moment I can think of that in two ways, either delaying keystroke signals, bringing them all on fixed interval times. Or making it possible to share and exchange each other fingerprints, “using” them as masks and hence making it imposssible to (mis-)use them as unique identifiers. 
(~"shareable collectible", "exchange market for keystroke fingerprints")
reference: 
- exchanging supermarkets loyalty cards
- exchanging sim cards
- book: Obfuscation by Finn Brunton and Helen Nissenbaum

![Visualised Fingerprints](https://github.com/leoneckert/visual-keystroke-fingerprint-web/blob/master/keystroke_fingerprint_pub.png)
