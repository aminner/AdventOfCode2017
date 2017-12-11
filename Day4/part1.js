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
    var validPasscodesFound = 0;

    inputLines.forEach(line => {
        if (isValidPassCode(line))
        {
            // console.log('Valid Passcode: ' + line);
            validPasscodesFound++;
        }
    });
    // console.log('Lines: ' + lines);
    console.log('Valid Found: ' + validPasscodesFound);
}

var lines = 0;
function isValidPassCode(line) {
    lines++;
    var words = line.split(' ');
    var isValid = true;
    var counts = {};
    words.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    // words.forEach(word => {
    //     if (isValid) {
    //         var count = 0;
            
            // var regex = new RegExp(word, 'g');
            // while ((result = regex.exec(line))) {
            //     count++;
            //     // console.log("Count: " + count + '\t' + word + "\t" + line);
            //     if (count > 1) {
            //         console.log('Not valid\t' + result + '\t' + line);
            //         isValid = false;
            //     }
            // }
        // }
    // });
    for (var key in counts) {
        if (counts.hasOwnProperty(key)) {
            if(isValid && counts[key]> 1)
                isValid = false;
        }
    }

    return isValid;
}

start();