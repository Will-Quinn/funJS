# funJS
Mini projects covering a range of javascripts essential topics

1: Color Flipper
------------------------------------------------------------------------
Color Flipper was used to improve my knowledge of 
arrays
document.getElementById()
document.querySelector()
addEventListener()
document.body.style.backgroundColor
Math.floor()
Math.random()
array.length

The simple color flipper used an array
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
a button with an eventlistener was added which gets the value of a random number function and applies it with
document.body.style.backgroundColor = colors[randNumber];
colors.textContent = colors[randNumber];
the random number function uses Math.floor(Math.random()*colors.length); to round the the nearest whole number
which would line up to an indext within the array, thereby selecting one of the values with an array which is 
valid for selecting a specific color.

The hex color flipper used a different array
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
containing all possible letters/numbers for a hex value. (that are 6 characters long. some are fewer)
adding and event listener to the button running a function that loops 6 times (hex value) on each loop
let hexColor = '#';
hexColor += hex[getRandomNumber()]
which is concatenating a random idex of the array on each loop giving us a random hex value
the function then applies the value to the body as text and applies the color to the background.

2: Counter
------------------------------------------------------------------------
Counter was used to improve my knowledge of 
document.querySelectorAll()
forEach()
addEventListener()
currentTarget property
classList
textContent
This was a very easy thing to make but its always good to revist things.
Dont even need to talk about it.
.contains to target the different buttons was cool to know. this was used in a if statement.

3: Reviews
------------------------------------------------------------------------
Counter was used to improve my knowledge of 
objects
DOMContentLoaded
addEventListener()
array.length
textContent

a random number generator the length of the object array was made to select the id of the item and grab its contents through a function and updating the html through queryselectors.
to make scrolling through the reviews continous. if you'd reached the begining of the array of objects and wanted to go out or bounds on either side, it would then take you to the opposite side. a random button was also created but this was dumb with only 4 items to choose from.
