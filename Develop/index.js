// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
// const questions = [

inquirer
    .prompt([
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
    ])

    // ];

    // TODO: Create a function to write README file
    
    function writeToFile(fileName, data) {
        const filename = `README.md`;

        const { title, description, installation, usage } = data

        const readme =

            `## <Your-Project-Title>
            ${data.title}
            
            ## Description
            ${data.description}
            
            ## Installation
            ${data.installation}

            ## Usage 
            ${data.usage}
            `
    
        // TODO: Create a function to initialize app
        function init() { 
            promptUser()
            .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
            .then(() => console.log('Successfully wrote to README.md'))
            .catch((err) => console.error(err));

        }

        // Function call to initialize app
        init();

    }
