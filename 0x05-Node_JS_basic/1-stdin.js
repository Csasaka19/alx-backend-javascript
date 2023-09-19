const { spawn } = require('node:child_process')
const ls = spawn('ls', ['-lh', '/usr'])

ls.stdout.on('data', (data) => {
    console.log('stdout:', data.toString())
})

ls.stderr.on('data', (data) => {
    console.log('stderr:', data.toString())
})

ls.on('close',  (code) => {
    
})
