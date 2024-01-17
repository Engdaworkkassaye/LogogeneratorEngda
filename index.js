const fs = require('fs');
const readline = require('readline-sync');
const { createLogoSVG } = require('./logoGenerator');

function getUserInput(prompt) {
  return readline.question(prompt);
}

function main() {
  
  
  
  const text = getUserInput('Enter up to three characters for the text: ');

  const textColor = getUserInput('Enter text color (keyword or hexadecimal): ');
  const shapes = ['circle', 'triangle', 'square'];
  const selectedShape = readline.keyInSelect(shapes, 'Select a shape: ');

  if (selectedShape === -1) {
    console.log('Exiting...');
    return;
  }

  const shapeColor = getUserInput('Enter shape color (keyword or hexadecimal): ');

 
  const svgContent = createLogoSVG(text, textColor, shapes[selectedShape], shapeColor);

  
  fs.writeFileSync('logo.svg', svgContent);

  
}


main();
