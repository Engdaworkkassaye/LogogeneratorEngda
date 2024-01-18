

const { Triangle, Circle, Square } = require('./shapes.js');

function createLogoSVG(text, textColor, shapeType, shapeColor) {
  text = text.slice(0, 3);
  
  textColor = validateColor(textColor) ? textColor : 'black';

  let shape;
  switch (shapeType) {
    case 'circle':
      shape = new Circle();
      break;


    case 'triangle':
      shape = new Triangle();
      break;

    case 'square':
      shape = new Square();
      break;

    default:
      shape = new Circle(); 
  }

  shape.setColor(validateColor(shapeColor) ? shapeColor : 'blue');

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      ${shape.render()}

      <text x="50%" y="50%" font-size="30" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>
  `;

  return svgContent;
}

function validateColor(color) {
  const colorRegex = /^(#[0-9A-Fa-f]{6}|[a-zA-Z]+)$/;
  return colorRegex.test(color);
}

module.exports = {
  createLogoSVG,
};