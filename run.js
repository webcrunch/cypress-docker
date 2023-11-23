
const { execSync } = require('child_process')
let alfa = `cypress run--spec cypress/e2e/${process.env.folder}`;
execSync(alfa)