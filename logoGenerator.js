// logoGenerator.js

function createLogoSVG(text) {
    
    text = text.slice(0, 3); 
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <text x="50%" y="50%" font-size="30" fill="red" text-anchor="middle" alignment-baseline="middle">${text}</text>
      </svg>
    `;
  
    return svgContent;
  }
  
  
  
  module.exports = {
    createLogoSVG,
  };
  