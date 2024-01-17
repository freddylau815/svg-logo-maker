const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Please enter three letters',

        validate: function (input) {
            if (input === '' || input.length > 3) {
                return 'Please enter up to three letters for your logo'
            } return true
        }

        
    },

    {
        type: 'input',
        name: 'color',
        message: 'Please enter color keyword or value',

        validate: function (input) {
            if (input === '') {
                return 'Please enter a color for your logo'
            } return true
        }
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape',
        choices: ['Circle', 'Triangle', 'Square']
    }
]

module.exports = questions