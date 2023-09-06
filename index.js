const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const promptUser = () => {
  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => (value.length <= 3 ? true : "Please enter up to three characters.")
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ];
  
  inquirer.prompt(questions).then(generateSVG);
};

const generateSVG = (answers) => {
  let shape;

  switch (answers.shape) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
  }

  shape.setColor(answers.shapeColor);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="100" font-family="Arial" font-size="24" fill="${answers.textColor}" text-anchor="middle" dy=".3em">${answers.text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
  console.log("Generated logo.svg");
};

promptUser();