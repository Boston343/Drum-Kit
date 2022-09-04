
var audio_tom1 = new Audio("sounds/tom-1.mp3");
var audio_tom2 = new Audio("sounds/tom-2.mp3");
var audio_tom3 = new Audio("sounds/tom-3.mp3");
var audio_tom4 = new Audio("sounds/tom-4.mp3");
var audio_crash = new Audio("sounds/crash.mp3");
var audio_kick = new Audio("sounds/kick-bass.mp3");
var audio_snare = new Audio("sounds/snare.mp3");

// add event listener for each item with class ".drum" using "forEach" and "addEventListener"
document.querySelectorAll(".drum").forEach(item => {
    item.addEventListener("click", function () {
        var letter = this.innerHTML;
        if ( letter == "w" ) {
            audio_tom1.play();
        }
        else if ( letter == "a" ) {
            audio_tom2.play();
        }
        else if ( letter == "s" ) {
            audio_tom3.play();
        }
        else if (letter == "d" ) {
            audio_tom4.play();
        }
        else if ( letter == "j" ) {
            audio_crash.play();
        }
        else if ( letter == "k" ) {
            audio_kick.play();
        }
        else if ( letter == "l" ) {
            audio_snare.play();
        }
    })
})

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();