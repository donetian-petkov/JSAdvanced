class SummerCamp {

    constructor(organizer , location) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];

    }

    registerParticipant(name, condition, money) {

        try {
            if (!this.priceForTheCamp.hasOwnProperty(condition)) {
                throw Error("Unsuccessful registration at the camp.");
            }
        } catch (e) {
            return e.message;
        }

        if (this.listOfParticipants.includes(name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > Number(money)){
            return `The money is not enough to pay the stay at the camp.`;
        }

        let obj = {name:name, condition:condition, power: 100, wins: 0}

        this.listOfParticipants.push(obj);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name) {

        try {
            if (!this.listOfParticipants.some(obj => obj.name === name)) {
                throw Error(`The ${name} is not registered in the camp.`);
            }
        } catch (e) {
            return e.message;
        }

        this.listOfParticipants.splice(this.listOfParticipants.findIndex(obj => obj.name === name), 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay (typeOfGame, participant1, participant2) {

        let player1 = this.listOfParticipants.find(obj => obj.name === participant1);

        try {
            if (!this.listOfParticipants.some(obj => obj.name === participant1)) {
                throw Error(`Invalid entered name/s.`);
            }
        } catch (e){
            return e.message;
        }

        if (typeOfGame === 'Battleship') {
            player1.power+=20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }

        try {
            if (!this.listOfParticipants.some(obj => obj.name === participant2)) {
                throw Error(`Invalid entered name/s.`);
            }
        } catch (e) {
            return e.message;
        }


        let player2 = this.listOfParticipants.find(obj => obj.name === participant2);

        try {
            if (player1.condition !== player2.condition){
                throw Error(`Choose players with equal condition.`);
            }
        } catch (e) {
            return e.message;
        }


        if (typeOfGame === 'WaterBalloonFights') {
            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (player1.power < player2.power){
                player2.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            }
        }

        return `There is no winner.`;

    }

    toString() {
        let text = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        this.listOfParticipants.sort((a,b) => b.power - a.power);

        for (let participant of this.listOfParticipants) {
            text+=`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`
        }

        text = text.slice(0, -1);

        return text;
    }

}

let summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
