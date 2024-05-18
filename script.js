var colors = ["lightblue","lightcoral","lightcyan","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lavender"];
var index = 0;

// an arrow function (also known as a lambda function) that is being added as an event listener to the button with the id "submit" that changes the background color of the webpage when the button is clicked.
document.querySelector("#submit").addEventListener("click", () => {
//if the index variable is greater than the length of the colors array minus one (colors.length - 1)
if(index > colors.length - 1)
    //If the condition is true, it means that all colors in the colors array have been used, so the index variable is reset to 0.
    index = 0;
//The background color of the webpage is then updated by setting the backgroundColor property of the document.body element to the color at the current index in the colors array and incremented by using the post-increment operator (++) after accessing its value
document.body.style.backgroundColor = colors[index++];  
});