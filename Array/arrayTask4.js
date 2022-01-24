function arraysDemo(array){

    let sortedArray = array.sort((a,b) => a.localeCompare(b));

    let orderNumber = 1;

    sortedArray.forEach((name) => {
        console.log(`${orderNumber}.${name}`);
        orderNumber++;
    })
}