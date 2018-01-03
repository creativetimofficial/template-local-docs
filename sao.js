const superb = require('superb')
const pascalCase = require('pascal-case')

module.exports = {
    prompts: {
        name: {
            message: 'What is the name of the product?',
            default: ''
        },
        repository: {
            message: 'Repository name',
            default: ''
        },
        documentation: {
            message: 'Provide a link to the product documentation',
            default({repository}) {
              return `http://vuejs.creative-tim.com/${repository}/documentation/`
            }
        },
        version: {
            message: 'What is the current project version?',
            default: 'v1.0.0'
        },
    },
    data(answers) {
        return {
            issues: `https://github.com/creativetimofficial/${answers.repository}/issues`
        }
    },
    showTip: true
}
