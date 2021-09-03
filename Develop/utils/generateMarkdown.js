// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//do we need this section? homework does not ask for a link to license, only badge and notice at bottom of readme
// function renderLicenseLink(license) { 
// //
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  return `This application is licensed under ${license}.`;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title.toLowerCase().split(' ').join('-')}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}


  ## Contributing
 ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please reach out via:
  
  GitHub: ${data.username}; and

  Email: ${data.email}.

`;
}

module.exports = generateMarkdown;
