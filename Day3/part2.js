var startCoordinate = {
    x: 0,
    y: 0,
    value: 1
}
var graph = [][];
var checkValue = 347991;
function start() {
    var i = 1;
    var x = 0;
    var y = 0;    
    graph[0][0].push(1);
    var notFound = true;
    while(notFound)
    {
        for(var j = x; j < x+i; j++)
        {
            
        }
    }
}


function checkCoordinates(previousCoordinate, currentCoordinate) {
    console.log('\tPrevious\t' + previousCoordinate.value + '\t(' + previousCoordinate.x + ',' + previousCoordinate.y + ')')
    console.log('\tCurrent\t\t' + currentCoordinate.value + '\t(' + currentCoordinate.x + ',' + currentCoordinate.y + ')')
    if (currentCoordinate.value === checkValue) {
        console.log("Coordinate is: (" + currentCoordinate.x + ',' + currentCoordinate.y + ')');
        foundCoordinate = currentCoordinate;
        return {
            notFound: false,
            foundCoordinate: foundCoordinate
        }
    } else if (previousCoordinate.value <= checkValue && checkValue <= currentCoordinate.value) {
        var stepsAway = Math.abs(checkValue - currentCoordinate.value);
        console.log("Coordinate exists in here somewheres!");
        // for (var x = previousCoordinate.x; x < currentCoordinate.x; x = x + multiplier) {
        //     console.log(x);
        // }
        // console.log('\t' + currentCoordinate)
        return {
            notFound: true,
            stepsAway: stepsAway
        }
    }
    return {
        notFound: true
    }
}
start();