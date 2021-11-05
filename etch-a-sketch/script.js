//create grid 
let value = 16;
function toSquare(value){
    for(let i = 0; i < value; i++){
        for(let j = 0; j < value; j++){
            const squaresrow = document.querySelector('.container');
            const createSquares = document.createElement('div');
            createSquares.classList.add('square');
            createSquares.style.width = `${ 600 / value - 2}px`;
            createSquares.style.height = `${600 / value - 2}px`;
            createSquares.classList.add('squarerow');
            squaresrow.appendChild(createSquares);
          
        };
    };
};
//call function to create grid
toSquare(value)
//change size button
const button = document.querySelector('button');
button.addEventListener('click', size);
function size(){
    value = prompt('Enter new size (<100)');
    if(value > 100 || value < 1){
        value = prompt('Enter a number < 100');
    };
    erase();
};
//event listeners on click buttons
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', function(event){
        paint(button.id);
    })
})
//select a color for each button 
function paint(button) {
    switch (button) {
        case 'black':
            erase();
            const squares = document.querySelectorAll('.squarerow');
            squares.forEach((square) => {
                square.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = "black";
                });
            });
            break;
        case 'grayscale':
            erase();
            const squaresgray = document.querySelectorAll('.squarerow');
            squaresgray.forEach((squares) => {        
                squares.addEventListener('mouseover', function(event){
                colorvalue = window.getComputedStyle(squares).getPropertyValue("background-color");                
                let color = Number(colorvalue.slice(-4, -1));
                event.target.style.backgroundColor = `rgb(${color - 25}, ${color - 25}, ${color - 25})`;
                });
            });
            break;
        case 'colorfull':
            erase();
            const squarescolor = document.querySelectorAll('.squarerow');
            squarescolor.forEach((squaresc) => {
                squaresc.addEventListener('mouseover', function(event){
                let color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
                event.target.style.backgroundColor = color;
                });
            })
        default:
            break;
    }
}
// erase grid
function erase(){
    const erase = document.querySelectorAll('.square');
    erase.forEach((eraser) => {
    eraser.remove();
    });
return toSquare(value);
};

