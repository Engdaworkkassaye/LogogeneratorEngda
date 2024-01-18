
const fs = require('fs');
const readline = require('readline-sync');
const { createLogoSVG } = require('./lib/logoGenerator.js'); 

function getUserInput(prompt) {
  return readline.question(prompt);
}

function main() {
  
  const text = getUserInput('Enter up to three characters for the text: ');
  const textColor = getUserInput('Enter text color (keyword or hexadecimal): ');

 
  const shapes = ['circle', 'triangle', 'square'];

  const selectedShapeIndex = readline.keyInSelect(shapes, 'Select a shape: ');

  if (selectedShapeIndex === -1) { 
    return;
  }

  const selectedShape = shapes[selectedShapeIndex];
  const shapeColor = getUserInput('Enter shape color (keyword or hexadecimal): ');

  
  const svgContent = createLogoSVG(text, textColor, selectedShape, shapeColor);

 
  fs.writeFileSync('logo.svg', svgContent);

  
}


main();