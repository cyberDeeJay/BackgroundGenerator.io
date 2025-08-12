// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
// var randomBtn = document.getElementById("randomBtn");
// var resetBtn = document.getElementById("resetBtn");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }


// // saves to local storage

// localStorage.setItem("color1", color1.value);
// localStorage.setItem("color2", color2.value);


// function randomColor() {
// 	return "#" + Math.floor(Math.random() *16777215)
// 	.toString(16)
// 	.padStart(6,'0');
// }

// function setRandomColors() {
// 	color1.value = randomColor();
// 	color2.value = randomColor();
// 	setGradient();
// }

// function resetColors() {
// 	localStorage.removeItem("color1");
// 	localStorage.removeItem("color2");
// 	color1.value = "#00ff00"; // default
//     color2.value = "#ff0000"; // default
//     setGradient();
// }

// // load saved colors if available

// function loadSavedColors() {
// 	const savedColor1 = localStorage.getItem("color1");
// 	const savedColor2 = localStorage.getItem("color2");

// 	if (savedColor1 && savedColor2) {
// 		color1.value = savedColor1;
// 		color2.value = savedColor2;
// 	}
// 	setGradient();
// }


// // event Listeners

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

// randomBtn.addEventListener("click", setRandomColors);

// resetBtn.addEventListener("click", resetColors);


// // intialize
// loadSavedColors();


//  this is a polished version assisted by Chat GPT

// DOM Elements
const cssOutput = document.getElementById("cssOutput");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.getElementById("randomBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

// Set gradient background and update CSS output
function setGradient() {
  const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  body.style.background = gradient;
  cssOutput.textContent = gradient + ";";

  // Save colors in localStorage
  localStorage.setItem("color1", color1.value);
  localStorage.setItem("color2", color2.value);
}

// Generate a random hex color
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
}

// Apply random colors to inputs and background
function setRandomColors() {
  color1.value = randomColor();
  color2.value = randomColor();
  setGradient();
}

// Reset colors to default values
function resetColors() {
  localStorage.removeItem("color1");
  localStorage.removeItem("color2");
  color1.value = "#00ff00"; // default green
  color2.value = "#ff0000"; // default red
  setGradient();
}

// Copy CSS code to clipboard
function copyCSS() {
  navigator.clipboard.writeText(cssOutput.textContent)
    .then(() => {
      alert("CSS copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}

// Load saved colors from localStorage
function loadSavedColors() {
  const savedColor1 = localStorage.getItem("color1");
  const savedColor2 = localStorage.getItem("color2");

  if (savedColor1 && savedColor2) {
    color1.value = savedColor1;
    color2.value = savedColor2;
  }
  setGradient();
}

// Event Listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", setRandomColors);
resetBtn.addEventListener("click", resetColors);
copyBtn.addEventListener("click", copyCSS);

// Initialize
loadSavedColors();
