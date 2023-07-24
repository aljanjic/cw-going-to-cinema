function cinemaGoing(card, ticket, frac) {

  let regularPrice = 0;
  let schemaPrice = 500;
  let ticketNumber = 1;

  while(schemaPrice - 15 > regularPrice){
    regularPrice += ticket;
    schemaPrice = schemaPrice + 15 * Math.pow(frac, ticketNumber)
    ticketNumber++;
  }

  console.log('Regular price: ', regularPrice )
  console.log('Schema Price: ', schemaPrice)


  return ticketNumber;

}

module.exports = cinemaGoing;
