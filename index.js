// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?'`
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter instructions on how to test the project',
    },
    {
        type: 'confirm',
        name: 'contributingConfirmation',
        message: 'Would you like other developers to contribute to your project?',
        default: false,
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter guidlines on how to contribute to the project',
        when: (answers) => answers.contributingConfirmation,
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this porject?',
        choices: ['No License', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclicpse Public License 2.0',
            'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your Github usernmae?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    // Writes Title, Description, Installation, Usage, Test, License, GitName, and email
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile(answers.title, generateMarkdown(answers));
            // Testing
            console.log(`Title: ${answers.title}.md`);
            console.log(`Confirmation: ${answers.contributingConfirmation}`);
            if (answers.contributingConfirmation) {
                console.log(`Input: ${answers.contributing}`);
            }
        });
}

// Function call to initialize app
init();


// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README