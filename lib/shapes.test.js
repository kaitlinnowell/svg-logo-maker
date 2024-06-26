const {Triangle, Circle, Square} = require('./shapes.js');
const fs = require('fs');

describe('Triangle', () => {
    describe('color', () => {
        it('should create a triangle of the specified color', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe('Circle', () => {
    describe('blue circle', () => {
        it('should create an SVG of a blue circle with green text that says KEN', async () => {
            const shape = new Circle();
            shape.setColor("blue");
            shape.setTextColor("green")
            shape.setText("KEN")
            // Read the SVG file asynchronously
            const svgFileContent = await fs.promises.readFile('./examples/blue_circle.svg', 'utf8');
                        
            // Compare the generated SVG with the content of the file
            expect(shape.drawShape()).toEqual(svgFileContent);
        });
    });
});

describe('Square', () => {
    describe('pink square', () => {
        it('should create an SVG of a pink square with yellow text that says SVG', async () => {
            const shape = new Square();
            shape.setColor("pink");
            shape.setTextColor("yellow")
            shape.setText("SVG")
            // Read the SVG file asynchronously
            const svgSquareContent = await fs.promises.readFile('./examples/pink_square.svg', 'utf8');
                        
            // Compare the generated SVG with the content of the file
            expect(shape.drawShape()).toEqual(svgSquareContent);
        });
    });
});
