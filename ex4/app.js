const fs = require('fs');
let names = [];
let rawNames;
let numbers = [];
let rawNumbers;
let result = [];

const FILE = ['./files/names.txt', './files/numbers.txt'];

//read names
function readNames(namesFileAddr) {
    fs.readFile(namesFileAddr, (err, namesData) => {
        if (err) return console.log(err.message)
        rawNames = namesData;
        readNumbers(FILE[1])
    })
}

//read numbers 
function readNumbers(numbersFileAddr) {
    fs.readFile(numbersFileAddr, (err, numbersData) => {
        if (err) return console.log(err.message)
        rawNumbers = numbersData;
        processNames(rawNames)
    })
}

function processNames(rawNames) {
    let namesRows = rawNames.toString().split('\r\n');
    namesRows.forEach(nameRow => {
        let rowData = nameRow.split('-');
        names.push({ id: rowData[0], uName: rowData[1] })
    })

    processNumbers(rawNumbers)
}

function processNumbers(rawNumbers) {
    let numbersRows = rawNumbers.toString().split('\r\n');
    numbersRows.forEach(numberRow => {
        let rowData = numberRow.split('-');
        let objWithThisId = numbers.find(number => number.id === rowData[0])
        if (objWithThisId) {
            objWithThisId.numbersArray.push(rowData[1])
        } else {
            numbers.push({ id: rowData[0], numbersArray: [rowData[1]] })
        }
    })
    mergeNamesAndRows()
}

function mergeNamesAndRows() {
    names.forEach(nameObj => {
        let inCommon = numbers.find(numberObj => numberObj.id === nameObj.id);
        if (inCommon) {
            result.push({
                userName: nameObj.uName,
                userNumbers: inCommon.numbersArray
            })
        } else {
            result.push({
                userName: nameObj.uName,
                userNumbers: []
            })
        }
    })

    printResult()
}

function printResult() {
    let data = '';
    result.forEach(user => {
        if (user.userNumbers.length === 0) {
            data += `${user.userName} hasn't any phone number.\n`
        } else if (user.userNumbers.length === 1) {
            data += `${user.userName}'s phone number is ${user.userNumbers[0]}.\n`
        } else {
            data += `${user.userName}'s phone numbers are ${user.userNumbers.join(',')}.\n`
        }
    })

    fs.writeFile('./files/result.txt', data, { flag: 'a' }, err => {
        if (err) return console.log(err.message);
    })
}

readNames(FILE[0])