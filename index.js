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
            var kbdTag = document.getElementsByTagName("kbd");

            var len = audioTag.length;
            var i = 0;

            while (i < len) {
                
                if (audioTag[i].dataset.key == myKey) {

                    console.log(kbdTag[i]);

                    kbdTag[i].style.transform = "rotate(20deg)";
                    audioTag[i].play();

                }

                i++;

            }
            
/*
        	switch (myKey) {

        		case 81:
                    audioTag[0].play();
	        		break;

        		case 83:
                    audioTag[1].play();
        			break;
        		
                case 68:
                    audioTag[2].play();
                    break;

                case 70:
                    audioTag[3].play();
                    break;    

                case 71:
                    audioTag[4].play();
                    break;

                case 72:
                    audioTag[5].play();
                    break;

                case 74:
                    audioTag[6].play();
                    break;

                case 75:
                    audioTag[7].play();
                    break;

                case 77:
                    audioTag[8].play();
                    break;

        	}
*/
        }

    }

    document.addEventListener("DOMContentLoaded", loaded);
})()
