/*
    From https://www.w3schools.com/jsref/event_key_keycode.asp

    Tip: To find out if the user is pressing a printable key (e.g. "a" or "5"),
    it is recommended to use this property on the onkeypress event.
    To find out if the user is pressing a function key (e.g. "F1", "CAPS LOCK" or "Home")
    use the onkeydown or onkeyup event.

    Note: In Firefox, the keyCode property does not work on the onkeypress event
    (will only return 0). For a cross-browser solution, use the which property together
    with keyCode, e.g:

*/
(function() {

    function loaded() {

        // you can start code here
         document.onkeyup = function(event) {       // Unicode key
        //document.onkeydown = function(event) {   // Unicode key
        //document.onkeypress = function(event) {  // Unicode character code (ASCII character)
/*
    The event (i.e. key pressing) property ".which" is necessary to make FireFox understand
    the DOM ".onkeypress" property, used for printable keys (e.g. "a" or "5").
*/
//        	var myKey = event.keyCode ? event.keyCode : event.which;
            var myKey = event.keyCode || event.which;

            var audioTag = document.getElementsByTagName("audio");

            var len = audioTag.length;
            var i = 0;

            while (i < len) {
                
//                if (audioTag[i].dataset.dataKey === myKey) {
                if (audioTag[i].dataset.key == myKey) {

                    audioTag[i].play();
                    console.log(i, len, myKey, audioTag[i], audioTag[i].dataset.key);

                }

//                console.log(i, len, myKey, audioTag[i], audioTag[i].dataset.dataKey);
//               console.log(i, len, myKey, audioTag[i], audioTag[i].dataset.key);

                i++;

            }
            
/*
        	switch (myKey) {

        		case 81:
	        		//console.log("you pressed Q");
//                    var soundCode = 81;
//                    document.getElementById(soundCode).play();
//                    document.getElementsByAttribute("data-key", key).play();
//                    document.getAttribute("data-key").play;
//                    document.querySelectorAll(soundCode).play();
                    audioTag[0].play();
	        		break;

        		case 83:
        			//console.log("you pressed S");S
                    audioTag[1].play();
        			break;
        		
                case 68:
        			//console.log("you pressed D");
                    audioTag[2].play();
                    break;

                case 70:
                    //console.log("you pressed F");
                    audioTag[3].play();
                    break;    

                case 71:
        			//console.log("you pressed G");
                    audioTag[4].play();
                    break;

                case 72:
        			//console.log("you pressed H");
                    audioTag[5].play();
                    break;

                case 74:
        			//console.log("you pressed J");
                    audioTag[6].play();
                    break;

                case 75:
        			//console.log("you pressed K");
                    audioTag[7].play();
                    break;

                case 77:
           			//console.log("you pressed L");
                    audioTag[8].play();
                    break;

        	}
*/
        }

    }

    document.addEventListener("DOMContentLoaded", loaded);
})()
