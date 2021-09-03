// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function init(){
inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your application. Use the following questions as a guide: What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a sentence or two on the installation process for your application.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a brief description on the application\'s usage.',
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Please select a license using the down-key.',
            choices: ['MIT', 'GNU', 'Apache', 'BSD']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please provide the names of any contributors. If this project had no other contributors, please hit enter.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Feel free to write tests for your application; you can provide examples on how to run them here.'
        },
    

    ])

        // TODO: Create a function to initialize app
                .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
                .then(() => console.log('Successfully wrote to README.md'))
                .catch((err) => console.error(err));

        }

        // Function call to initialize app
        init();

    


