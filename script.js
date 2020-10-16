var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");
var button = document.querySelector("#randomize");


function setGradient() {

	body.style.background = 
		"linear-gradient(to right, " + 
		color1.value + " , " + color2.value + " )";

	//adjust text if colors are too dark
	setTextColor(color1.value, color2.value);

	css.textContent = body.style.background + ";";
}

function getRandomNumber() {
	// 0 to 255
	var randomNumber =  Math.floor(Math.random() * 256); 

	// convert decimal to hex
	var hex = randomNumber.toString(16); 
	
	// pad hex value 0-f with leading zero
	if (hex.length === 1) {
		hex = "0" + hex;
	}
	
	return (hex);
}

function getRandomColor() {
	var red = getRandomNumber();
	var green = getRandomNumber();
	var blue = getRandomNumber();
	return "#" + red + green + blue; 
}


function showRandomColors() {
	// get some random colors
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	//adjust text if colors are too dark
	setTextColor(color1.value, color2.value);

	// paint the screen with new colors
	setGradient();
}

function setTextColor(color1, color2){
	// use tinycolor module and isDark method
	var tinycolor1 = tinycolor(color1).isDark();
	var tinycolor2 = tinycolor(color2).isDark();
	
	//  both colors are considered dark
	if (tinycolor1 && tinycolor2) {
		//console.log("looks too dark");
		body.classList.add("lightText");
	} else {
		//console.log("probably ok");
		body.classList.remove("lightText");
	}
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", showRandomColors);

setGradient();