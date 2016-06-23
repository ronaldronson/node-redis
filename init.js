var spawn = require('child_process').spawn
var env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

console.log('> run node in ' + env)

spawn('npm', ['run', env], { stdio: 'inherit' })
