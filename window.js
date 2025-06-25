// move window around
let position = { x: 0, y: 0 };
interact('.window-outline').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
  }
})

//change mouse design
window.onload = function () {
  document.body.style.cursor = 'url("assets/mouse_rose.png"), auto';
};


//Hide loading bar
document.getElementById("loading_window").style.display = "none";
document.getElementById("cat").style.display = "none";
//Hide PopUps
document.getElementById("popup1").style.display = "none";

//X Button
document.getElementById("close").onclick = function() {close()}
function close() {
  document.getElementById("window-outline").style.display = "none";
}

//Okay Button
document.getElementById("OK").onclick = function() {okButton()};

function okButton(){
  document.getElementById("prompt").style.display = "none";
  document.getElementById("loading_window").style.display = "block";
  
}

const lastSegment = document.getElementById('last-segment');

lastSegment.addEventListener('animationend', () => {
  document.getElementById("loading_window").style.display = "none";
  document.getElementById("cat").style.display = "block";
});

//show Cat
const catGifs = [
  'assets/cat_1.gif',
  'assets/cat_2.gif',
  'assets/cat_3.gif',
  'assets/cat_4.gif'
]
const randomCat = catGifs[Math.floor(Math.random() * catGifs.length)];
document.getElementById("cat_gif").src = randomCat;



//PopUps
//After clicking the Cancel Button for the first time
document.getElementById("cancel").onclick = function() {cancel()}

function cancel() {
  document.getElementById("popup1").style.display = "block";
}