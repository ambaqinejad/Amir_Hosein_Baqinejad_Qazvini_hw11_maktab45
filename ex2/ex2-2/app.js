const fs = require('fs');
const R_FILE_ADDR = './files/from.txt';
const W_FILE_ADDR = './files/to.txt';

function readToWrite(readFileAddr, writeFileAddr) {
    let data = fs.readFileSync(readFileAddr)
    writer(writeFileAddr, data)
}

function writer(writeFileAddr, data) {
    fs.writeFileSync(writeFileAddr, data)
}

readToWrite(R_FILE_ADDR, W_FILE_ADDR)