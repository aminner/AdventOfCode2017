var utils = require("../AOCUtils.js")
const BASE_PATH = "./"
var regex = /([()]|(->)|[,]|\s)+/g

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
    var programObjects = [];
    inputLines.forEach(line => {
        var parsedLine = line.replace(regex, ",").split(",");
        // console.log(parsedLine);
        if (parsedLine.length >= 3 && parsedLine[2] != '') {
            var progObj = {
                name: parsedLine[0].trim(),
                weight: parsedLine[1].replace(/[()]+/, ''),
                children: []
            };

            for (var i = 2; i < parsedLine.length; i++) {
                progObj.children.push(parsedLine[i].trim());
            }
            console.log(progObj);
            programObjects.push(progObj);
        }
    });
    createTree(programObjects);
}

function createTree(programObjects)
{
    for(var i=0; i < programObjects; i++)
    {
        
        programObjects[0].children.forEach(child => {
            if(programObjects[child] != null)
            {
                
            }
        });
    }
}


start();