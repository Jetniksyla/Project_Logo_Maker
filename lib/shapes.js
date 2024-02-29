// Shape is the parent class for all the shapes that are going to be use.

class Shape {
  constructor (shapeColor, textColor, text) {
    (this.shapeColor = shapeColor),
      (this.textColor = textColor),
      (this.text = text);
  }
}
module.exports = Shape;
