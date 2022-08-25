const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener("click", function(){
    let hexColor = '#';
    for (let i = 0;i <6; i++){
        hexColor += hex[getRandomNumber()]
        // += is addition assignment. = overrides but += will add on.
        // let a = 'hello';
        // console.log(a += ' world'); 
        // expected output: "hello world"
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    // const randNumber = getRandomNumber();
    // document.body.style.backgroundColor = colors[randNumber];
    // colors.textContent = colors[randNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
// random number defaulted from 0-1 now multiplied by array length.
}
