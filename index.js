const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')
const generateSVG = require('./lib/generateSVG')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) 
         return console.log(err)
        })
}

inquirer.prompt(questions).then((answerObj) => {
    const svgFile = generateSVG(answerObj)
    writeToFile('./examples/logo.svg', svgFile)
})