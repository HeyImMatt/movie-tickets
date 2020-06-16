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
function Ticket(movie, time, userAge) {
  this.movie = movie;
  this.time = time;
  this.userAge = userAge;
  this.price = 20;
}

Ticket.prototype.priceCalc = function(){
  if (this.movie === "New Release 1"){
    this.price = 40;
  } ;
  if (this.time === "Matinee") {
    this.price /= 2;
  };
  if (this.userAge >= 65 || this.userAge <= 10) {
    this.price /= 2;
  };
};

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
    newTicket.priceCalc()
    $("div#output").append(`<p>$${newTicket.price}</p>`);
  });
});