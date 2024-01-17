const generateSVG = require('./lib/generateSVG')
const shape = new Triangle();


shape.setColor("blue");
expect(shape.generateTriangle()).toEqual('<polygon points="150,20 230,180 70,180" fill="blue" />');

