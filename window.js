//background
const grid = document.getElementById("grid");

  const pawSize = 250; // px
  const cols = Math.ceil(window.innerWidth / pawSize);
  const rows = Math.ceil(window.innerHeight / pawSize);

  // Set grid layout dynamically
  grid.style.gridTemplateColumns = `repeat(${cols}, ${pawSize}px)`;
  grid.style.gridTemplateRows = `repeat(${rows}, ${pawSize}px)`;

  // Create paw elements and add to grid
  const totalPaws = cols * rows;
  for (let i = 0; i < totalPaws; i++) {
    const paw = document.createElement("div");
    paw.classList.add("paw");

    // Optional: Add animation delay for a wavy effect
    //paw.style.animationDelay = `${(i % cols) * 0.1}s`;

    grid.appendChild(paw);
  }


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
document.body.style.cursor = 'url("assets/mouse_rose.png"), auto';
document.getElementById("window-outline").style.cursor = 'url("assets/mouse_rose.png"), auto';



//Hide loading bar
document.getElementById("loading_window").style.display = "none";
document.getElementById("cat").style.display = "none";


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
//document.getElementById("cancel").onclick = function() {cancel()}

window.cancel = function(currentIndex) {
  
  //const currentPopup = document.getElementById(`popup${currentIndex}`);
  const nextPopup = document.getElementById(`popup${currentIndex + 1}`);
  console.log("cancel!")

  if (nextPopup) {
    nextPopup.style.display = "block";
  }

  if(nextPopup == 1){
    //stop animation
    const paws = document.querySelectorAll(".paw");
    paws.forEach(paw => paw.classList.add("stopped"));

  }
}