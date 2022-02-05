class Ticket {
    constructor(destination , price, status) {

        this.destination = destination;
        this.price = price;
        this.status = status;

    }
}

function result (ticketArray, sortCriteria) {

    let tickets = [];

      for (let input of ticketArray) {

          let ticketInput = input.split('|');

          let ticket = new Ticket(ticketInput[0], Number(ticketInput[1]).toFixed(2), ticketInput[2]);

          tickets.push(ticket);

      }

      switch (sortCriteria) {
          case "destination":
              tickets.sort((a,b) => a.destination.localeCompare(b.destination));
              break;
          case "price":
              tickets.sort((a,b) => b.price - a.price);
              break;
          case "status":
              tickets.sort((a,b) => b.status.localeCompare(a.status));
      }

      return tickets;
}

let resultArray = result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');

console.log(resultArray);



