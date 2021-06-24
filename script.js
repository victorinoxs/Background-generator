var _ = require('lodash');

// var array = [1,2,3,4,5,6,7];
// console.log('answer:', _.without(array,3));
//need to update bundle.js file  browserify script.js > bundle.js

var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var button = document.getElementById("randomColor");

function setGradientToRight() {
    body.style.background= "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
    css.textContent = body.style.background + ";";
}

function setGradientToBottom() {
    body.style.background= "linear-gradient(180deg, " + color1.value + " 0, " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function setGradient() {
    if(radio1.checked) {
    //LEFT - RIGH radio button is checked
    setGradientToRight()
  } else if(radio2.checked) 
    //TOP-BOTTOM radio button is checked
    setGradientToBottom()
}


function randomColor(){
    var rColor1 = Math.floor(Math.random()* 0xfffff * 1000000).toString(16);
    var rColor2 =Math.floor(Math.random()* 0xfffff * 1000000).toString(16);
    color1.value = "#" + rColor1.slice(0, 6);
    color2.value = "#" + rColor2.slice(0, 6);
    setGradient()
    console.log(color1.value );
    console.log(color2.value );
}
radio1.addEventListener("input", setGradient);
radio2.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor)