function arrayDemo(array, step){

    let resultArray = [];

    for(let i = 0 ; i < array.length ; i+=step){
        resultArray.push(array[i]);
    }

    return resultArray;

}
