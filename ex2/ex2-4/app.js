const fs = require('fs');
const R_FILES = ['./files/from.txt', './files/append.txt'];
const W_FILE_ADDR = './files/to.txt';

function readToWrite(rFiles, writeFileAddr) {
    let data = '';
    rFiles.forEach(fileAddr => {
        data += ` ${fs.readFileSync(fileAddr)}`
    })
    writer(writeFileAddr, data)
}

function writer(writeFileAddr, data) {
    fs.writeFileSync(writeFileAddr, data)
}

readToWrite(R_FILES, W_FILE_ADDR)