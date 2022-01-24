function objectDemo(input){

    let array = input.toString().split(', ');

    let cities = [];

    for (let iterator of array){

        let currentArray = iterator.toString().replace(/\|/g, "").split(' , ');

        for (let i = 1 ; i < currentArray.length; i++){

            let town = currentArray[i].toString().split("  ")[0];
            let latitude = Number(currentArray[i].toString().split("  ")[1]).toFixed(2);
            let longitude = Number(currentArray[i].toString().split("  ")[2]).toFixed(2);

            let city = {
                Town: town,
                Latitude: Number(latitude),
                Longitude: Number(longitude)
            };

            cities.push(city);
        }

    }

    console.log(JSON.stringify(cities));

}

objectDemo(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |']
);