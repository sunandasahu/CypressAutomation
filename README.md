# CypressAutomation

Cypress Automation: An E2E Test Automation Framework using cypress and node with KISS Approach - Keep it Super Simple.
Pre-requisite Software
Install the following pre-requisites
Install Visual Studio Code (or may be your favourite IDE): https://code.visualstudio.com/
Install node.js (npm) latest stable version: https://nodejs.org/en
Browsers (Chrome is must): https://www.google.com/chrome/
Part1: Installing Cypress
Check Node Version in terminal

node -v
npm -v
Create a folder under the documents for cypress. You can use commands in terminal too.

cd Documents
mkdir cypress
cd cypress
Open visual studio and open the folder cypress. Run the following commands in terminal

npm init : for package.json file creation
npm install -D cypress : installing cypress
npx cypress open : starts cypress interface.
Note: setup the interface to make sure you have folder structures created in vs code.

Part2: Installing All dependencies.
We need to install following packages in order to setup the end to end framework.
Use this following command to install the mentioned packages. npm install -D packageName
 1. cypress-junit-reporter
 2. cypress-log-to-output
 3. cypress-multi-reporters
 4. cypress-wait-until
 5. cypress-xpath
 6. mocha
 7. mochawesome
 8. mochawesome-merge
 9. mochawesome-report-generator
10. moment
Part3: Setting up Page Object Model, files structure and other requirements.
We will be creating folders: pages( for functions/methods), selectors(for writing locators), specs(for automation)

Delete everything under e2e and create the following folders mentioned above
Goto cypress.config.js and copy it as it is from project
Goto support -> e2e.js and copy it as it is from project
We will be using website mentioned in the cypress.config.js file. We will create the file structure and follow the same way.

selectors folder: create a file GreencartSelector.js. Define a class name always as a file name

class GreencartSelector {
     write locators
   }
   export default new GreencartSelector
pages folder: create a file GreencartPage.js. Define a class name always as a file name. Import the selectors files

import GreenCarSSelector from "../selectors/GreencartSelector.js"
  class GreenCartPage {
    write functions/ methods
  }
  export default GreenCartPage
spec folder: create a file Greencart.spec.js. Import the pages files.

import GreenCartPage from "../pages/GreencartPage";
const greenCartPage = new GreenCartPage();

describe("Green cart scenarios", () => {
it("descripton", () => {
  write code
  });
});
Part4: Xpath hacks.
Here are the various ways which can be helpful in creating xpath.
 1. Using Text: //button[text() = "ADD TO CART"]
 2. Goto Parent: //span[@class="redLogo"]/parent::div
 3. Back to previous sibling: //button[@class="search-button"]/preceding-sibling::input
 4. Goto Next sibling: //a[@class="cart-header-navlink"]/following-sibling::a
 5. Contains: //a[contains(text(),"Deals")]
 6. Normalised space: //span[normalize-space() ="KART"] 
Part5: Getting data from json file.
We define data in json file created under fixture folder and then call those files in the spec file to get the data.
  before(() => {
  cy.fixture("fileName.json").then((value) => {
    return data = value
    });
 });
Part6: Running Tagged based scenarios
We will be defining tags to run the automation. Reference Guide: https://github.com/cypress-io/cypress/tree/develop/npm/grep
Install the package: npm i -D @cypress/grep

Copy & paste under e2e.js file

//Import @cypress/grep
const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()
Copy & paste under cypress.config.js.

setupNodeEvents(on, config) {
require('@cypress/grep/src/plugin')(config);
return config;
}
Configure the automation scenarios

describe("Green cart scenarios", {tags:['@regression']}, () => {}) 
OR
it("user is able to search an item and verify the price", {tags: ['@smoke']}, () => {})
Command to Run: npx cypress run --browser chrome --headless --env grepTags={tagName}

Part7: Cypress Dashboard Configurations
In order to run automation scenarios in cypress dashboard. First login to the dashboard and follow the steps
Create account: https://www.cypress.io/cloud/
Create New organisation and then create the new project.
Goto Project settings and create new Key.
Go to cypress.config.js file. Insert projectId: "copy Project ID from the project settings"
Run the following command: npx cypress run --record --key {copy Record Key from the project settings} --browser chrome
Part8: Cypress Github Integration
Setup .github/workflows -> ci.yml file to configure github to run the automation. Reference guide: https://github.com/cypress-io/github-action
Create the folder at parent level: .github/workflows
Create the file: ci.yml
Go to above link or just copy the content of ci.yml from the repo and push the commit.
Goto github repo and look for actions tab.
Part9: Commands creation for running automation scenarios locally
Create commands under scripts section in package.json file to run automation locally.

Use npm run commandName to run the commands in terminal.
1. Open Cypress - "cypressOpen": "npx cypress open"
2. Clean up files - "cypressClean": "npx shx rm -rf cypress/results && npx shx rm -rf cypress/screenshots && npx shx rm -rf cypress/videos"
3. Running tag based scenarios - "cypressTagRun": "npx cypress run --browser chrome --headless --env grepTags={tagName}"
4. Dashboard run - "cypressDashBoardRun": "npm run cypressClean && npx cypress run --record --key {keyValue} --browser chrome'"
5. Run single spec file - "cypressRunSpecFile": "npm run clean && npx cypress run --record --key {value} --browser chrome --spec='{spec file path}'"
