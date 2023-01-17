const container = document.getElementById("container");
const button = container.querySelectorAll('div');
function playSound(source){
    let s = new Audio;
    s = document.getElementById(source);
    s.play();
}
let soundSource;
document.addEventListener("keydown", function(event){
    soundSource = event.key;
    document.getElementById(`button-${soundSource}`).style.width = 90 + "px";
    document.getElementById(`button-${soundSource}`).style.background = "aquamarine";
    document.addEventListener("keyup",function(){
         document.getElementById(`button-${soundSource}`).style.width = 75 + "px";
         document.getElementById(`button-${soundSource}`).style.background = "aqua";
    })
    playSound(soundSource);
})

