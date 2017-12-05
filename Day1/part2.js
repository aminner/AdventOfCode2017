var fs = require('fs');
var file = 'input.txt';
var regex = /([0-9])\1/g;
var runProgram = (err, data) => {
    var myArray = [];
    var sum = 0;
    // data = 12131415;
    data = (data + '').trim();
    // console.log(data.length);
    var steps = data.length/2;
    var dataCharArray = data.trim().split('');
    // console.log(dataCharArray);
    // console.log(steps);
    for(var i=0; i < dataCharArray.length; i++)
    {
        var secondIndex = i+steps;
        if(secondIndex > dataCharArray.length-1)
        {
            secondIndex = (secondIndex%dataCharArray.length);
        }
        // console.log('Indexes: ' + i + " - " + secondIndex);
        // console.log('Values: ' + dataCharArray[i] + " -  " + dataCharArray[secondIndex]);
        if(dataCharArray[i] === dataCharArray[secondIndex])
        {
            sum+= parseInt(dataCharArray[i]);
        }
    }
    console.log("Sum:" + sum);
}

fs.readFile(file, 'utf8', runProgram);
