let ticketNumber = 1;

function createTicket(name, issue) {
  // Create a new ticket object with the provided details
  const ticket = {
    ticketNumber: ticketNumber,
    name: name,
    issue: issue
  };

  // Increment the ticket number for the next ticket
  ticketNumber++;

  // Save the ticket object to local storage or send it to the backend for storage

  // Return the created ticket object
  return ticket;
}
