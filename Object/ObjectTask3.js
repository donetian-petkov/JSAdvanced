function objectDemo (requirements){

    let obj = {
        model: requirements.model
    }

    let smallEngine = {
        power: 90,
        volume: 1800
    };

    let normalEngine = {
        power: 120,
        volume: 2400
    };

    let monsterEngine = {
        power: 200,
        volume: 3500
    };

    if (requirements.power <= 90){
        obj.engine = smallEngine;
    } else if (requirements.power > 90 && requirements.power <= 120) {
        obj.engine = normalEngine;
    } else if (requirements.power > 120 && requirements.power <= 200) {
        obj.engine = monsterEngine;
    }

    let hatchback = {
        type: "hatchback",
        color: requirements.color
    };

    let coupe = {
        type: "coupe",
        color: requirements.color
    };

    if (requirements.carriage === hatchback.type){
        obj.carriage = hatchback;
    } else if (requirements.carriage === coupe.type){
        obj.carriage = coupe;
    }

    let wheel = requirements.wheelsize;

    if (wheel % 2 === 0){
        wheel-=1;
    }
    let wheelArray = [wheel, wheel, wheel, wheel];

    obj.wheels = wheelArray;

    return obj;

}

objectDemo({ model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14 }
);