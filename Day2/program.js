var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day2/"

function start() {
    var inputFileName = "input.txt";
    if (process.argv.length >= 3) {
        inputFileName = process.argv[2];
    }
    var filePath = BASE_PATH + inputFileName;
    console.log(filePath);
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
        var max = findMax(line);
        var min = findMin(line);
        checkSum += (max - min);
    });
}

function findMax(line)
{

}

function findMin(line)
{
    
}

start();