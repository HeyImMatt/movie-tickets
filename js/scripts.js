//TicketsLog usiness Logic
function TicketsLog(){
  this.tickets = [];
  this.ticketId = 0;
}

TicketsLog.prototype.addTicket = function(ticket) {
  ticket.ticketId = this.assignId();
  this.tickets.push(ticket);
}

TicketsLog.prototype.assignId = function() {
  this.ticketId += 1;
  return this.ticketId;
}


//Ticket business logic
function Ticket(time, movie, userAge) {
  this.time = time;
  this.movie = movie;
  this.userAge = userAge;
}

function priceCalc(ticket){
  let price
  if (ticket.movie === "New Release 1"){
    price = 40
  } else {
    price = 20
  }

  if (ticket.time === "Matinee") {
    price /= 2
  }

  if (ticket.userAge >= 65 || ticket.userAge <= 10) {
    price /= 2
  }
  return price;
}

 //User Interface

$(document).ready(function() {
  let userTicketLog = new TicketsLog();
  $("#movieSelect").submit(function() {
    event.preventDefault()

    let movieTitle = $("#movieTitle input[type='radio']:checked").val();
    let movieTime = $("#movieTime input[type='radio']:checked").val();
    let userAge = parseInt($("#age").val());
    let newTicket = new Ticket(movieTitle, movieTime, userAge);
    userTicketLog.addTicket(newTicket);

    $("div#output").append(`<p>$${priceCalc(newTicket)}</p>`);
  });
});