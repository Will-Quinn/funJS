const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

btn.addEventListener("click", function(){
    const randNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randNumber];
    colors.textContent = colors[randNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
// random number defaulted from 0-1 now multiplied by array length.
}
