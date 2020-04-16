const os = require('os-utils')

console.log('Total cores', os.cpuCount())
console.log('Max memory', os.totalmem() / 1024, 'Gb')
console.log('Free memory', os.freemem() / 1024, 'Gb')
console.log('Free memory (%)', os.freememPercentage() * 100, '%')

os.cpuUsage((v) => {
    console.log( 'CPU Usage (%): ' + (v * 100) + '%')
})

os.cpuFree((v) => {
    console.log( 'CPU Free (%): ' + (v  * 100) + '%')
})