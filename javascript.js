const sketchpad = document.querySelector('.sketchpad');

for (i=0; i<15; i++){
    pixelRow = document.createElement('div');
    //pixelRow.setAttribute('display-style: flex;');
    for (j=0; j<15; j++){
        const pixel = document.createElement('div');
        pixel.setAttribute('style', 'width: 32px; height: 32px; border: 1px dotted black; background-color: white; flex-wrap: wrap;');   
        pixelRow.appendChild(pixel);
    }
    sketchpad.appendChild(pixelRow);
}