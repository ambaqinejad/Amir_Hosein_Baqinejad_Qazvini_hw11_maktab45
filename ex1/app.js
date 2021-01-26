const FIRST_NAME = 'Amir Hosein';
const LAST_NAME = 'Baqinejad';

function fullName(firstName, lastName, cb) {
    cb(`${firstName} ${lastName}`);
}

function printFullName(fullName) {
    console.log(fullName);
}

fullName(FIRST_NAME, LAST_NAME, printFullName);