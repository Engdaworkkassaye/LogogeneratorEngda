const fs = require('fs');
const readline = require('readline-sync');
const { createLogoSVG } = require('./logoGenerator');
function getUserInput(prompt) {
    return readline.question(prompt);
  }
  function main() {
    console.log('=== Logo Generator ===');
    
 
    const text = getUserInput('Enter up to three characters for the text: ');
    const textColor = getUserInput('Enter text color (keyword or hexadecimal): ');
    const svgContent = createLogoSVG(text,textColor);
    fs.writeFileSync('logo.svg', svgContent);
    
  }
  main();

  