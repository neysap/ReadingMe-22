
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `## License
This application is covered under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseSection}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions or additional information, feel free to reach out to me on [GitHub](https://github.com/${data.githubUsername}) or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
