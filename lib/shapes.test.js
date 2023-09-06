const { Triangle, Circle, Square } = require('./shapes');

describe("Shapes", () => {
  test("Triangle should return correct SVG string", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test("Circle should return correct SVG string", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="red" />');
  });

  test("Square should return correct SVG string", () => {
    const shape = new Square();
    shape.setColor("violetblue");
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="violetblue" />');
  });
  
  /*
  Place for other test
  */
});