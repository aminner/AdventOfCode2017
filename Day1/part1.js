var fs = require('fs');
var file = 'input.txt';
var regex = /([0-9])\1+/g;
var test1 = '8231753674683997878179259195565332579493378483264978184143341284379682788518559178822225126625428'
var runProgram = (err, data) => {
    var myArray = [];
    var sum = 0;
    data = data + '';
    // data = test1 + '';
    while ((myArray = regex.exec(data)) !== null) {
         console.log("Array: " + myArray[0]);
         console.log(myArray[0][0] + " - "  + myArray[0].length);
        var value = parseInt(myArray[0][0]) * parseInt(myArray[0].length-1);
         console.log("Value: " + value);
        sum += value;
         console.log('Sum:' + sum);
    }
    var dataCharArray = data.trim().split('');
    console.log(dataCharArray[0] + " - " + dataCharArray[dataCharArray.length-1]);
    if(dataCharArray[0] === dataCharArray[dataCharArray.length-1])
    {
        console.log('first and last match');
        sum += parseInt(dataCharArray[0]);
    }
    console.log(sum);
}

fs.readFile(file, 'utf8', runProgram);
