
// ----------------------------------------------------------------------------------------------------------
// add event listener for each item with class ".drum" using "forEach" and "addEventListener"
document.querySelectorAll(".drum").forEach(item => {
    item.addEventListener("click", function () {
        var key = this.innerHTML;
        playSound(key);
    })
})

// ----------------------------------------------------------------------------------------------------------
// add event listener for keypress
document.addEventListener("keydown", function(event) {
    playSound(event.key);
});

// ----------------------------------------------------------------------------------------------------------
// Title
function playSound(key) {
    switch (key) {
        case "w":
            var audio_tom1  = new Audio("sounds/tom-1.mp3");
            audio_tom1.play();
            break;

        case "a":
            var audio_tom2  = new Audio("sounds/tom-2.mp3");
            audio_tom2.play();
            break;

        case "s":
            var audio_tom3  = new Audio("sounds/tom-3.mp3");
            audio_tom3.play();
            break;

        case "d":
            var audio_tom4  = new Audio("sounds/tom-4.mp3");
            audio_tom4.play();
            break;

        case "j":
            var audio_crash = new Audio("sounds/crash.mp3");
            audio_crash.play();
            break;

        case "k":
            var audio_kick  = new Audio("sounds/kick-bass.mp3");
            audio_kick.play();
            break;

        case "l":
            var audio_snare = new Audio("sounds/snare.mp3");
            audio_snare.play();
            break;

        default:
            break;
    }
}
