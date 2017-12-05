var utils = require("../AOCUtils.js")
const BASE_PATH = "./"

function start() {
    var inputFileName = "input.txt";
    if (process.argv.length >= 3) {
        inputFileName = process.argv[2];
    }
    var filePath = BASE_PATH + inputFileName;
    utils.read(filePath, {
        error: function (error) {
            console.log(error);
        }, successful: function (inputData) {
            processInput(inputData.trim().split('\n'));
        }
    });
}

function processInput(inputLines) {
    var checkSum = 0;
    inputLines.forEach(line => {
        console.log(line);
        var arrayOfNumbers = line.split('\t').map(function(item) {
            return parseInt(item, 10);
        });
        
        console.log(arrayOfNumbers)
        var max = arrayOfNumbers.reduce(function(a, b) {
            return Math.max(a, b) });
        var min = arrayOfNumbers.reduce(function(a, b) {
            return Math.min(a, b) });
        console.log(max + " - " + min);
        checkSum += (max - min);
    });
    console.log(checkSum);
}

start();