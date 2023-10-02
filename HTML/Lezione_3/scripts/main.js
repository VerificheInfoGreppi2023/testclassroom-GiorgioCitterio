// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable = "Bob";
// let età = 25;
// let booleano = true;
// let vettore = [2, 3, "ciao", true, 0.544];
// let età1 = 25.0;
// let confronto = (età === età1);

// alert(confronto);

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }  

// alert(multiply(3, 4));

// document.querySelector("img").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

//   const myImage = document.querySelector("img");

//   myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "images/firefox-icon.png") {
//       myImage.setAttribute("src", "images/firefox2.png");
//     } else {
//       myImage.setAttribute("src", "img/black_background.jpg");
//     }
//   }; 

let myButton = document.getElementById("change-button");
let myHeading = document.querySelector("h1");

function setUserName() {    
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

 if (!localStorage.getItem("name")) {
   setUserName();
 } else {
   const storedName = localStorage.getItem("name");
   myHeading.textContent = `Mozilla is cool, ${storedName}`;
 }  

myButton.onclick = () => {
    setUserName();
};

