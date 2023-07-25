function cinemaGoing(card, ticket, frac) {

  let regularPrice = 0;
  let schemaPrice = card;
  let ticketNumber = 1;

  while(schemaPrice > regularPrice){
    regularPrice += ticket;
    schemaPrice = schemaPrice + ticket * Math.pow(frac, ticketNumber)
    // schemaPrice = schemaPrice + Math.pow(15 , frac * ticketNumber)
    ticketNumber++;

    console.log('Ticket Number: ', ticketNumber)
    console.log('Regular price: ', regularPrice )
    console.log('Schema Price: ', schemaPrice)
  }

  console.log('Regular price FINAL: ', regularPrice )
  console.log('Schema Price FINAL: ', schemaPrice)


  return ticketNumber-1;

}

module.exports = cinemaGoing;
