const sketchpad = document.querySelector('.sketchpad');
let numberOfSquares = 16;
const changeSizeButton = document.querySelector('.change-size');
changeSizeButton.addEventListener('click', () => {
    //popup window asks for number of squares
    numberOfSquares = prompt("Please enter your desired grid size", 16);
    // make new grid with updated size
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
