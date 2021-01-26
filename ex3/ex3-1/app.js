const fs = require('fs');
const FILE = './newFile.txt'

fs.open(FILE, 'wx', (err, fd) => {
    fs.access(FILE, err => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(`${FILE} exists.`)
        }
    })
})