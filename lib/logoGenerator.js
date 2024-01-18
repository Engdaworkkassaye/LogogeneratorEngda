
function createLogoSVG(text, textColor, shape, shapeColor) {
 
  text = text.slice(0, 3); 
  textColor = validateColor(textColor) ? textColor : 'black';
  shape = ['circle', 'triangle', 'square'].includes(shape) ? shape : 'circle';
  shapeColor = validateColor(shapeColor) ? shapeColor : 'blue';

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shapeColor}" />
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
