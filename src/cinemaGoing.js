function cinemaGoing(card, ticket, frac) {

  let schemaPrice = card;
  let regularPrice = ticketNumber = 0;

  while(Math.ceil(schemaPrice) >= regularPrice){
    regularPrice += ticket;
    schemaPrice += ticket * Math.pow(frac, ++ticketNumber)
  }
  return ticketNumber;
}

module.exports = cinemaGoing;
