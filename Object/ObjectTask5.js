function lowestPrice (input){

    let products = [];

    while (input.length > 0){

        let [town, product, price] = input.shift().split(' | ');

        if (products.some(el => el.product === product)){

            let obj = products.find(x => x.product === product);

            if (obj.price > Number(price)){
                obj.price = Number(price);
                obj.town = town;
            }

        } else {
            let obj = {
                product: product,
                price: Number(price),
                town: town
            }
            products.push(obj);
        }
    }

    for (let iterator of products){
        console.log(`${iterator.product} -> ${iterator.price} (${iterator.town})`);
    }

}

lowestPrice(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])