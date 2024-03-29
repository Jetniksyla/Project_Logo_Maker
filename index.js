const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/prompt.js");
const makeShape = require("./lib/createShapes.js");

// generateLogo function creates svg logo using inquirer prompts and writes data to file logo.svg
function generateLogo(response) {
  console.log("Response:", response); // Log the response object
  const svg = makeShape(response);
  console.log("SVG:", svg); // Log the SVG generated by makeShape
  fs.writeFile("./output/logo.svg", svg, () =>
    console.log("Successfully generated logo!")
  );
}

// starts prompts and generates logo based on user choices
function init() {
  inquirer.prompt(questions).then((response) => {
    generateLogo(response);
  });
}

init();
