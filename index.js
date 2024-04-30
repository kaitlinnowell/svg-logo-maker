// package imports
var inquirer = require("inquirer");
const {Triangle, Circle, Square} = require('./lib/shapes');
const fs = require('fs');

//  User Input
var questions = [
    {
        type: 'input',
        message: "Enter up to three text characters for the logo: ",
        name: 'text',
        validate: function(answer) {
            if(answer.length > 3) {
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Enter a text color (keyword or Hex) : ",
        name: 'textColor',
    },
    {   type: 'list',
        message: "Select a shape: ",
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: "Enter a fill color (keyword or Hex) : ",
        name: 'color',
    },
]

// TODO: Create a function to write README file
function generateSVG(text, textColor, shape, color) {
    var newShape = null;
    console.log('Generated ./examples/logo.svg')
    switch (shape) {
        case 'triangle':
            newShape = new Triangle();
            break;
        case 'circle':
            newShape = new Circle();
            break;
        case 'square':
            newShape = new Square();
            break;
        default:
            throw new Error('Invalid shape.');
            break;
    }
    newShape.setColor(color);
    newShape.setText(text);
    newShape.setTextColor(textColor);
    data = newShape.drawShape();
    fs.writeFileSync("./examples/logo.svg", data);
}

// Initialize the app
function init() {
    inquirer.prompt(questions).then((response) => {
        generateSVG(response.text, response.textColor, response.shape, response.color)
    })
    .catch((error) => {
        // Execution will jump to this callback function when an exception occurs in any of the previous promises in the
        // chain.
        console.log(error);
        console.log('Incorrect input value.');
      });
}

// Function call to initialize app
init();