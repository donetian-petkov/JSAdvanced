function objectDemo(input){
    let result = [];

    for (const iterator of input){

        let[name, level, items] = iterator.split(' / ');
        level=Number(level);
        items = items ? items.split(', ') : [];

        let hero = {
            name: name,
            level: level,
            items: items
        }

        result.push(hero);
    }

    console.log(JSON.stringify(result));
}

objectDemo(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']
);