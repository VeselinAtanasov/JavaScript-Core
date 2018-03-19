
function tickets(arr,criteria) {
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price = price;
            this.status=status;
        }

        static compareTo(ticket1,ticket2){
            switch (criteria){
                case "destination":
                    return ticket1.destination.localeCompare(ticket2.destination);
                case "price":
                    return ticket1.price - ticket2.price;
                case "status":
                    return ticket1.status.localeCompare(ticket2.status);
            }
        }
    }
    let result =[];
    for (let record of arr) {
        let tokens=record.split("\|");
        let destination=tokens[0];
        let price=Number(tokens[1]);
        let status=tokens[2];
        let ticket = new Ticket(destination,price,status);
        result.push(ticket)
    }

    result.sort((a,b) =>Ticket.compareTo(a,b));

    return result;
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));