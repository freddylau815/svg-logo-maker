const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')
const generateSVG = require('./lib/generateSVG')

inquirer.prompt(questions).then((answerObj) => {
    const svgFile = generateSVG(answerObj)
    writeFile('./examples/generated.SVG', svgFile)
})