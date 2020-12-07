

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
       
        var buttonsclick = this.innerHTML;
        makesound(buttonsclick);
        

    });
}

document.addEventListener("keydown",function(event){
     makesound(event.key);
     buttonAnimation(event.key);
});


function makesound(key)
{
    switch (key) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3");
            w.play();
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;

        case "s":
            var s = new Audio("sounds/tom-3.mp3");
            s.play();
            break;
        case "d":
            var d = new Audio("sounds/tom-4.mp3");
            d.play();
            break;

        case "j":
            var j = new Audio("sounds/snare.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/crash.mp3");
            k.play();
            break;

        case "l":
            var k = new Audio("sounds/kick-bass.mp3");
            k.play();
            break;

        default:
            console.log("");
            break;
    }
}

function buttonAnimation(keypress)
{
  var activebutton=  document.querySelector("."+keypress);
  activebutton.classList.add("pressed");
  setTimeout(function() {
      activebutton.classList.remove("pressed");
  },100);
}