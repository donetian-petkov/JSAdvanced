function result (ticketArray, sortCriteria) {

    class Ticket {
        constructor(destination , price, status) {

            this.destination = destination;
            this.price = Number(price);
            this.status = status;

        }
    }

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
              tickets.sort((a,b) => a.price - b.price);
              break;
          case "status":
              tickets.sort((a,b) => a.status.localeCompare(b.status));
              break;
      }

      return tickets;
}

let resultArray = result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|available',
        'Philadelphia|132.20|departed',
        'Chicago|140.20|available',
        'Dallas|144.60|sold',
        'New York City|206.20|sold',
        'New York City|240.20|departed',
        'New York City|305.20|departed'],
    'price');

console.log(resultArray);



