const fs = require('fs');
const readline = require('readline-sync');
const { createLogoSVG } = require('./logoGenerator');
function getUserInput(prompt) {
    return readline.question(prompt);
  }
  function main() {
    console.log('=== Logo Generator ===');
    
 
    const text = getUserInput('Enter up to three characters for the text: ');
    const svgContent = createLogoSVG(text);
    fs.writeFileSync('logo.svg', svgContent);
    
  }
  main();

  