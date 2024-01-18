
const { createLogoSVG } = require('./logoGenerator.js');

test('createLogoSVG', () => {
  const svgContent = createLogoSVG('ABC', 'red', 'circle', 'green');
  expect(svgContent).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
  expect(svgContent).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
  expect(svgContent).toContain('<text x="50%" y="50%" font-size="30" fill="red" text-anchor="middle" alignment-baseline="middle">ABC</text>');
});