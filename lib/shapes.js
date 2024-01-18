

class Shape {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = validateColor(color) ? color : 'black';
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="160" height="160" x="20" y="20" fill="${this.color}" />`;
    }
  }
  
  function validateColor(color) {
    const colorRegex = /^(#[0-9A-Fa-f]{6}|[a-zA-Z]+)$/;
    return colorRegex.test(color);
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  