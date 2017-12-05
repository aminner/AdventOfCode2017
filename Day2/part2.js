var utils = require("../AOCUtils.js")
const BASE_PATH = "./"

function start() {
    var inputFileName = "test.txt";
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
        var arrayOfNumbers = line.split('\t').map(function (item) {
            return parseInt(item, 10);
        });
        // var sortedArray = arrayOfNumbers.sort(function (a, b) {  return b - a;  });
        console.log(arrayOfNumbers);
        var found = false;
        for (var i = 0; i < arrayOfNumbers.length; i++) {
            if (found)
                break;
            for (var j = 0; j < arrayOfNumbers.length; j++) {
                if (found)
                    break;
                if (i === j) continue;

                var jVal = arrayOfNumbers[j];
                var iVal = arrayOfNumbers[i];
                if (iVal > jVal && iVal % jVal === 0) {
                    console.log("i: " + iVal + " - j:" + jVal);
                    checkSum += (iVal / jVal);
                    found = true;
                } else if (jVal > iVal && jVal % iVal === 0) {
                    console.log("i: " + iVal + " - j:" + jVal);
                    checkSum += (jVal / iVal);
                    found = true;
                }
            }
        }
    });
    console.log(checkSum);
}

function findValue(numArray, divisor, index) {
    if (numArray[index] % divisor == 0)
        return numArray[index] / divisor;
    else if (index >= numArray.length)
        return 0;
    else
        findValue(numArray, divisor, ++index);
}
start();