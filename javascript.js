const sketchpad = document.querySelector('.sketchpad');
let numberOfSquares = 16;
const changeSizeButton = document.querySelector('.change-size');
const clearGridButton = document.querySelector('.clear');
changeSizeButton.addEventListener('click', () => {
    //popup window asks for number of squares
    numberOfSquares = prompt("Please enter your desired grid size", 16);
    // if user enters number greater than 100 size is automatically set to 100
    if (numberOfSquares > 100){
        numberOfSquares = 100;
    }
    // make new grid with updated size
    makeNewGrid();
});

clearGridButton.addEventListener('click', () => {
    makeNewGrid();
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeNewGrid(){
    removeAllChildNodes(sketchpad);
    // create rows of square grid 
    for (i=0; i<numberOfSquares-1; i++){
        squareRow = document.createElement('div');
        squareRow.setAttribute('style', 'display: flex; flex-direction: column; flex-grow: 1;');
        // fill each row with 16 squares
        for (j=0; j<numberOfSquares-1; j++){
            const square = document.createElement('div');
            square.setAttribute('style', 'border: 1px dotted black; background-color: white; flex-grow: 1;');   
            square.addEventListener('mouseover', () => {
                square.setAttribute('style', 'border: 1px dotted black; background-color: blue; flex-grow: 1;');
                console.log("hover change color");
            });
            squareRow.appendChild(square);
            
        }
        sketchpad.appendChild(squareRow);
    }
}

makeNewGrid();
