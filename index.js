const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./lib/questions')
const generateSVG = require('./lib/generateSVG')

inquirer.prompt(questions).then((answerObj) => {
    const svgFile = generateSVG(answerObj, answerObj.shape)
    fs.writeFile('./examples/generated.svg', svgFile, (err) => {
        if (err) return console.log(err)
    })
})