/* PICKS COLOR FROM ARRAY TO SET BACKGROUND COLOR ON CLICK
const colors = ["lightblue","lightcoral","lightcyan","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lavender"];
const index = 0;
document.querySelector("#submit").addEventListener("click", () => {
if(index > colors.length - 1)
    index = 0;
document.body.style.backgroundColor = colors[index++];  
});
*/

/* GENERATES RANDOM NUMBER TO SET BACKGROUND COLOR ON CLICK */
const getRandomHexColor = () => `#${(Math.floor(Math.random() * 0xFFFFFF)).toString(16)}`;
//generates a random hexadecimal color code and returns it as a string.
const setBackgroundRandomColor = () => document.body.style.backgroundColor = getRandomHexColor();
//sets the background color of the body element to the generated random color.
submit.addEventListener("click", setBackgroundRandomColor);
setBackgroundRondomColor();
