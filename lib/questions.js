const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Please enter three letters'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter color keyword or value'
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Please choose a shape',
        choices: ['Circle', 'Triangle', 'Square']
    }
]

module.exports = questions