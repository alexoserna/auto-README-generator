// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch (license) {
    case 'Apache License 2.0':
      badge = `![${license}](https://img.shields.io/badge/license-Apache%202.0-blue "${license}")`;
      break;
    case 'GNU General Public License v3.0':
      badge = `![${license}](https://img.shields.io/badge/license-GPL--3.0-blue "${license}")`;
      break;
    case 'MIT License':
      badge = `![${license}](https://img.shields.io/badge/license-MIT-brightgreen "${license}")`;
      break;
    case 'BSD 2-Clause "Simplified" License':
      badge = `![${license}](https://img.shields.io/badge/license-BSD--2--Clause-yellow "${license}")`;
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badge = `![${license}](https://img.shields.io/badge/license-BSD--3--Clause-yellow "${license}")`;
      break;
    case 'Boost Software License 1.0':
      badge = `![${license}](https://img.shields.io/badge/license-BSL--1.0-purple "${license}")`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      badge = `![${license}](https://img.shields.io/badge/license-CC0%201.0-pink "${license}")`;
      break;
    case 'Eclicpse Public License 2.0':
      badge = `![${license}](https://img.shields.io/badge/license-EPL--2.0-orange "${license}")`;
      break;
    case 'GNU Affero General Public License v3.0':
      badge = `![${license}](https://img.shields.io/badge/license-AGPL--3.0-green "${license}")`;
      break;
    case 'GNU General Public License v2.0':
      badge = `![${license}](https://img.shields.io/badge/license-GPL--2.0-blue "${license}")`;
      break;
    case 'GNU Lesser General Public License v2.1':
      badge = `![${license}](https://img.shields.io/badge/license-LGPL--2.1-navy "${license}")`;
      break;
    case 'Mozilla Public License 2.0':
      badge = `![${license}](https://img.shields.io/badge/license-MPL--2.0-pink "${license}")`;
      break;
    case 'The Unlicense':
      badge = `![${license}](https://img.shields.io/badge/license-Unlicense-lightgrey "${license}")`;
      break;
    default:
      return '';
  }

  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case 'Apache License 2.0':
      link = 'https://opensource.org/license/apache-2-0/';
      break;
    case 'GNU General Public License v3.0':
      link = 'https://opensource.org/license/gpl-3-0/';
      break;
    case 'MIT License':
      link = 'https://opensource.org/license/mit/';
      break;
    case 'BSD 2-Clause "Simplified" License':
      link = 'https://opensource.org/license/bsd-2-clause/';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      link = 'https://opensource.org/license/bsd-3-clause/';
      break;
    case 'Boost Software License 1.0':
      link = 'https://opensource.org/license/bsl1-0-html/';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      link = 'https://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Eclicpse Public License 2.0':
      link = 'https://opensource.org/license/epl-2-0/';
      break;
    case 'GNU Affero General Public License v3.0':
      link = 'https://opensource.org/license/agpl-v3/';
      break;
    case 'GNU General Public License v2.0':
      link = 'https://opensource.org/license/gpl-2-0/';
      break;
    case 'GNU Lesser General Public License v2.1':
      link = 'https://opensource.org/license/lgpl-2-1/';
      break;
    case 'Mozilla Public License 2.0':
      link = 'https://opensource.org/license/mpl-2-0/';
      break;
    case 'The Unlicense':
      link = 'https://opensource.org/license/unlicense/';
      break;
    default:
      return '';
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  url = renderLicenseLink(license);
  if (license) {
    return` ## License
  This project is licensed under the [${license}](${url}) - Click for more information
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  license = renderLicenseSection(data.license);
  badge = renderLicenseBadge(data.license);

  if(data.contributing != null){
    contribution = `## How to Contribute 
    ${data.contributing}`;
  } else {
    contribution='';
  }

  return `
  # ${data.title}
  ${badge}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${license}
  ${contribution}

  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions you can reach me here:
  Github: [${data.gitName}](https://github.com/${data.gitName})`;
}

module.exports = generateMarkdown;
