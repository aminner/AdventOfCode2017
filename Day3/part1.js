var startCoordinate = {
    x: 0,
    y: 0,
    value: 1
}
// var corners = [startCoordinate];
var checkValue = 347991;
function start() {
    var i = 1;
    var notFound = true;
    var currentCoordinate = startCoordinate;
    var previousCoordinate = startCoordinate;
    var foundCoordinate;
    console.log('CheckValue: ' + checkValue)
    while (notFound) {
        console.log("Steps: " + i);
        if (i > 1) {
            previousCoordinate = currentCoordinate;
        }
        var multiplier = (i % 2 === 0 ? 1 : -1);
        currentCoordinate = {
            x: previousCoordinate.x + i * multiplier,
            y: previousCoordinate.y,
            value: previousCoordinate.value + i
        }
        result = checkCoordinates(previousCoordinate, currentCoordinate);
        console.log(result);
        notFound = result.notFound;
        if (!result.notFound) {
            foundCoordinate = result.foundCoordinate;
            break;
        } else if (result.notFound && result.stepsAway > 0) {
            console.log('finding coordinate');
            foundCoordinate = {
                x: currentCoordinate.x - (multiplier * result.stepsAway),
                y: currentCoordinate.y,
                value: checkValue
            }
            console.log("Found Coordinate: " + foundCoordinate)
            notFound = true;
            break;
        }

        previousCoordinate = currentCoordinate;
        currentCoordinate = {
            x: previousCoordinate.x,
            y: previousCoordinate.y + i * multiplier,
            value: previousCoordinate.value + i
        }
        result = checkCoordinates(previousCoordinate, currentCoordinate);
        console.log(result);
        if (!result.notFound) {
            foundCoordinate = result.foundCoordinate;
            break;
        } else if (result.notFound && result.stepsAway) {
            console.log('finding coordinate');
            foundCoordinate = {
                x: currentCoordinate.x,
                y: currentCoordinate.y - (multiplier * result.stepsAway),
                value: checkValue
            }
            console.log(foundCoordinate)
            notFound = true;
            break;
        }
        i++;
        // corners.push(currentCoordinate);
    }
    if (foundCoordinate) {
        var result = Math.abs(foundCoordinate.x - startCoordinate.x) + Math.abs(foundCoordinate.y - startCoordinate.y)
        console.log(result);
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