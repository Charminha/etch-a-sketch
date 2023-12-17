const sketchpad = document.querySelector('.sketchpad');

// create rows of pixel grid 
for (i=0; i<15; i++){
    pixelRow = document.createElement('div');
    pixelRow.setAttribute('style', 'display: flex; flex-direction: column; flex-grow: 1;');
    // fill each row with 16 pixels
    for (j=0; j<15; j++){
        const pixel = document.createElement('div');
        pixel.setAttribute('style', 'width: 32px; height: 32px; border: 1px dotted black; background-color: white; flex-grow: 1;');   
        pixelRow.appendChild(pixel);
    }
    sketchpad.appendChild(pixelRow);
}