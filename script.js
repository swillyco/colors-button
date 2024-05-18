/* PICKS COLOR FROM ARRAY TO SET BACKGROUND COLOR ON CLICK
var colors = ["lightblue","lightcoral","lightcyan","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lavender"];
var index = 0;
document.querySelector("#submit").addEventListener("click", () => {
if(index > colors.length - 1)
    index = 0;
document.body.style.backgroundColor = colors[index++];  
});
*/

/*GENERATES RANDOM NUMBER TO SET BACKGROUND COLOR ON CLICK*/
const setBackgroundColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexColor = `#${randomNumber.toString(16)}`;
    document.body.style.backgroundColor = hexColor;
};
  submit.addEventListener("click", setBackgroundColor);
  setBackgroundColor();
