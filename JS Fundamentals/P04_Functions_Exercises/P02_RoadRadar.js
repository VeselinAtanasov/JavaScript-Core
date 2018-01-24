function roadRadar(arr) {
    "use strict";
    const MOTORWAY_MAX_SPEED = 130;
    const CITY_MAX_SPEED = 50;
    const RESIDENTIAL_MAX_SPEED = 20;
    const INTERSTATE_MAX_SPEED = 90;

    let speed = Number(arr[0]);
    let area = arr[1];

    function speedChecker(speed, maximumSpeed) {
        if (speed <= maximumSpeed) {
            return "";
        }
        let result = null;
        let speedDifference = speed - maximumSpeed;
        if (speedDifference > 40) {
            result = "reckless driving";
        } else if (speedDifference <= 40 && speedDifference > 20) {
            result = "excessive speeding";
        } else {
            result = "speeding";
        }
        return result;
    }

    let output = null;
    switch (area) {
        case "motorway":
            output = speedChecker(speed, MOTORWAY_MAX_SPEED);
            break;
        case "city":
            output = speedChecker(speed, CITY_MAX_SPEED);
            break;
        case "residential":
            output = speedChecker(speed, RESIDENTIAL_MAX_SPEED);
            break;
        case "interstate":
            output = speedChecker(speed, INTERSTATE_MAX_SPEED);
            break;
    }

    return output;
}

console.log(roadRadar([200, 'motorway']));

