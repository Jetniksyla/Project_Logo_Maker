const Shape = require("./shapes.js");

class triangle extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
    this.shapeColor = shapeColor;
  }
  render() {
    return `
    <svg version="1.1" 
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

module.exports = triangle;
