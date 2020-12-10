// Loads env vars for use in this file.
require('dotenv').config({
  path: '.env'
})

// Set the environment depending on the branch name from Netlify.
// We will use different environment variables depending on this variable.
let env = 'DEVELOP'
if (process.env.BRANCH === 'master') {
  env = 'MASTER'
} else if (process.env.BRANCH === 'test') {
  env = 'TEST'
}
