function arraysDemo(array){

    let resultArray = [];

    array = array.sort((a,b) => a-b);

    while(array.length !== 0){
        resultArray.push(array.shift());
        resultArray.push(array.pop());
    }

    return resultArray;
}