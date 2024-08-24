// Write a JavaScript program to remove items from a drop-down list.

function removeColor (){
  var x = document.getElementById("colorSelect");
  x.remove(x.selectedIndex);
}

// Write a JavaScript program to count and display dropdown list items in an alert window Sample HTML file
// let boldText = document.getElementById("bolding-Text");

// boldText.addEventListener("mouseover", ()=> {
//  boldText.style.fontWeight = "bold";
// })
// boldText.addEventListener("mouseout",()=>{
//   boldText.style.fontWeight = "normal";
// })

// Write a JavaScript program to get the window width and height (any time the window is resized).

// Function to log the current window width and height
// function logWindowSize() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   console.log(`Width: ${width}, Height: ${height}`);
// }
// window.addEventListener("resize", logWindowSize());

// Write a JavaScript program to calculate sphere volume. Sample Output of the form :

// let radius = document.getElementById("radius");
// let btn = document.getElementById("btn");
// let data = document.getElementById("data");
// btn.addEventListener("click", () => {
//   let radiusValue = parseFloat(radius.value); // Convert the input value to a number
//   let pi = 3.14;
//   let volume = (4 / 3) * pi * Math.pow(radiusValue, 3); // Calculate the volume of the sphere
//   data.append(volume);
//   console.log(volume); // Log the result to the console
// });

// Write a JavaScript program to count and display dropdown list items in an alert window.

let selectElement = document.getElementById("meatSelect");
let numberOfOptions = selectElement.options.length;
alert(`Number of options: ${numberOfOptions}`);
