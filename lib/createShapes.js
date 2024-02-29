const circle = require("./circle.js");
const triangle = require("./triangle.js");
const square = require("./square.js");

// creates the instances of shape based in the user input

function createShapes(res) {
  let shapes;
  console.log("User Input:", res); // Log user input
  console.log("Shape Color:", res.shapeColor); // Log shape color
  switch (res.shape) {
    case "Circle":
      shapes = new circle(res.shapeColor, res.textColor, res.text);
      break;
    case "Triangle":
      shapes = new triangle(res.shapeColor, res.textColor, res.text);
      break;
    case "Square":
      shapes = new square(res.shapeColor, res.textColor, res.text);
      break;
    default:
      console.log(`Invalid shape ${res.shapes}`);
      break;
  }
  if (shapes) {
    return shapes.render();
  }
}

module.exports = createShapes;
