function arraysDemo (commands){

    let output = [];

    for (let i=0 ; i < commands.length ; i++){
        let currentCommand = commands[i];

        if(currentCommand === 'add'){
            output.push(i + 1);
        } else if (currentCommand === 'remove'){
            output.pop();
        }
    }

    if (output.length === 0)
    {
        console.log("Empty");
    } else {
        console.log(output.join('\n'));
    }
}