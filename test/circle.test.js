const Circle = require("../lib/circle");

describe("Circle", () => {
  it("should return a circle logo based on user inputs of shape color, text and text color", () => {
    const circle = new Circle("green", "SVG", "yellow");
    expect(circle.render()).toEqual(`
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="green" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="SVG">yellow</text>
    </svg>
    `);
  });
});