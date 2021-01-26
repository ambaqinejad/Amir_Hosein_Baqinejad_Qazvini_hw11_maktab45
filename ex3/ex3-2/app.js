const fs = require('fs');
const FILE = './newFile.txt';

const f = fs.openSync(FILE, 'wx');
if (fs.existsSync(FILE)) {
    console.log(`${FILE} exists.`);
} else {
    console.log(`${FILE} doesn't exist.`);
}