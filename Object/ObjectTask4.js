function objectDemo(array){

    let obj = [];

    for (let i = 0 ; i < array.length; i++){

            let secondArray = array[i].toString().split(' / ');

            if (secondArray.length === 3) {

                let hero = {
                    name: secondArray[0],
                    level: Number(secondArray[1]),
                    items: secondArray[2].split(', ')
                }

                obj.push(hero);
            } else if (secondArray.length === 2) {
                let hero = {
                    name: secondArray[0],
                    level: Number(secondArray[1]),
                    items: []
                }

                obj.push(hero);
            }


    }

    let myJSON = JSON.stringify(obj);

   console.log(myJSON);
}

objectDemo(['Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    '']
);