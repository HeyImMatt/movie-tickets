//TicketsLog usiness Logic
function TicketsLog(){
  this.tickets = []
  this.ticketId = 0
}

TicketsLog.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
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


$(document).ready(function() {
  let userTicketLog = new TicketsLog()
  $("#movieSelect").submit(function() {
    event.preventDefault()

    let movieTitle = $("#movieTitle input[type='radio']:checked").val();

    let newTicket = new Ticket(movieTitle, movieTime, userAge)
  })
  //User Interface
}