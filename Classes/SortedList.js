class List {

    constructor() {
        this.listElements =[];
        this.size = 0;
    }

    sort() {
        this.listElements.sort((a,b) => a - b);
    }

    add(number){
        if (typeof number === 'number'){
            this.listElements.push(number);
            this.size = this.listElements.length;
            this.sort();
        }
    }

    remove(index){
        if (typeof index === 'number' && typeof this.listElements[index] !== 'undefined') {
            this.listElements.splice(index, 1);
            this.size = this.listElements.length;
            this.sort();
        }
    }

    get(index) {
        if (typeof index === 'number' && typeof this.listElements[index] !== 'undefined'){
            return this.listElements[index];
        }
    }

}

let list = new List();

list.add(5);

list.add(6);

list.remove(1);

list.add(7);

console.log(list.get(1));
