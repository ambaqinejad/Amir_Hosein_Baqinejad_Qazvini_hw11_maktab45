const fs = require('fs');
const R_FILES = [{
        addr: './files/from.txt'
    },
    {
        addr: './files/append.txt'
    }
];

const W_FILE_ADDR = './files/to.txt';

function readToWrite(rFiles, writeFileAddr, data, cb) {
    if (rFiles.length > 0) {
        let rFile = rFiles[0];
        fs.readFile(rFile.addr, (err, d) => {
            if (err) return console.log(err.message);
            readToWrite(rFiles.splice(1), writeFileAddr, `${data} ${d}`, cb)
        })
    } else {
        cb(writeFileAddr, data)
    }
}

function writer(writeFileAddr, data) {
    fs.writeFile(writeFileAddr, data, undefined, err => {
        if (err) return console.log(err.message);
    })
}

readToWrite(R_FILES, W_FILE_ADDR, '', writer)