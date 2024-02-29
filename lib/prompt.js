// Provided question for the user input
const questions = [
  {
    name: "shape",
    message: "What shape is the object?",
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "shapeColor",
    message: "What color is the object?",
    type: "input",
  },
  {
    name: "text",
    message: "Please chose 3 characters to create your logo",
    type: "text",
    validate: (value) => {
      if (value.length > 3) {
        console.log("\n Try again! Text must be up to 3 characters!");
      }
      return true;
    },
  },
  {
    name: "textColor",
    message: "Please type your text color: ",
    type: "input",
  },
];

module.exports = questions;
