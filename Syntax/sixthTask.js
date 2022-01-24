function demo(speed, area){

    let isOverLimit = false;
    let distanceDiff = 0;
    let speedingType = '';
    let limit = 0;

    switch(area){
        case 'motorway':
            limit = 130;
            distanceDiff=speed-limit;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break
    }

    distanceDiff = speed - limit;

    if (distanceDiff > 0){
        isOverLimit = true;
        if (distanceDiff <= 20) {
            speedingType = "speeding";
        } else if (distanceDiff > 20 && distanceDiff <= 40){
            speedingType = 'excessive speeding';
        } else if (distanceDiff > 40) {
            speedingType = "reckless driving";
        }
    }

    if (isOverLimit){
        console.log(`The speed is ${distanceDiff} km/h faster than the allowed speed of ${limit} - ${speedingType}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }

}