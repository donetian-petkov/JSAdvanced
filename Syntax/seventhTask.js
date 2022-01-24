function demo(num, cmd, cmd2, cmd3, cmd4, cmd5) {
    let number = Number(num);
    let arrOfCommands = [cmd, cmd2, cmd3, cmd4, cmd5];

    let chop = function(){
        return number/2;
    };

    let dice = function(){
        return Math.sqrt(number);
    };

    let spice = function(){
        return number+1;
    };

    let bake = function(){
        return number*3;
    };

    let fillet = function(){
        return number * 0.80;
    };

    for (let i = 0 ; i < arrOfCommands.length ; i++)
    {
        switch(arrOfCommands[i]){
            case 'chop':
                number = chop(number);
                break;
            case 'dice':
                number = dice(number);
                break;
            case 'spice':
                number = spice(number);
                break;
            case 'bake':
                number = bake(number);
                break;
            case 'fillet':
                number = fillet(number);
                break;
        }
        console.log(number);
    }

}