
var audio_tom1  = new Audio("sounds/tom-1.mp3");
var audio_tom2  = new Audio("sounds/tom-2.mp3");
var audio_tom3  = new Audio("sounds/tom-3.mp3");
var audio_tom4  = new Audio("sounds/tom-4.mp3");
var audio_crash = new Audio("sounds/crash.mp3");
var audio_kick  = new Audio("sounds/kick-bass.mp3");
var audio_snare = new Audio("sounds/snare.mp3");

// add event listener for each item with class ".drum" using "forEach" and "addEventListener"
document.querySelectorAll(".drum").forEach(item => {
    item.addEventListener("click", function () {
        var letter = this.innerHTML;
        switch (letter) {
            case "w":
                audio_tom1.play();
                break;

            case "a":
                audio_tom2.play();
                break;

            case "s":
                audio_tom3.play();
                break;

            case "d":
                audio_tom4.play();
                break;

            case "j":
                audio_crash.play();
                break;

            case "k":
                audio_kick.play();
                break;

            case "l":
                audio_snare.play();
                break;

            default:
                break;
        }

    })
})

//  use "keydown"

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();