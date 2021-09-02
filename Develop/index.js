// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [

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
            name: 'installation',
            message: 'Provide a brief description on the application\'s usage.',
        },
    ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
