const sketchpad = document.querySelector('.sketchpad');
for (i=0; i<16; i++){
    for (i=0; i<16; i++){
    const pixel = document.createElement('div');
    pixel.setAttribute('style', 'width: 32px; height: 32px; border: 1px dotted black; background-color: white; flex-wrap: wrap;');   
    sketchpad.appendChild(pixel);
    }
}