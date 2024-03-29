const Shape = require("./shapes.js");

class square extends Shape {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
    console.log("Shape Color:", shapeColor);
    this.shapeColor = shapeColor;
  }
  render() {
    return `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>
    `;
  }
}

module.exports = square;
