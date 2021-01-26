const fs = require('fs');
const R_FILE_ADDR = './files/from.txt';
const W_FILE_ADDR = './files/to.txt';

function readToWrite(readFileAddr, writeFileAddr, cb, writeOptions = undefined) {
    fs.readFile(readFileAddr, (err, data) => {
        if (err) return console.log(err.message);
        cb(writeFileAddr, data, writeOptions)
    })
}

function writer(writeFileAddr, data, options = undefined) {
    fs.writeFile(writeFileAddr, data, options, err => {
        if (err) return console.log(err.message);
    })
}

readToWrite(R_FILE_ADDR, W_FILE_ADDR, writer)