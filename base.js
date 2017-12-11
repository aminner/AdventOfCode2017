var fs = require('fs');
var file = 'input.txt';


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

function processInput (inputLines) {
    inputLines.forEach(line => {
    });
}

start();