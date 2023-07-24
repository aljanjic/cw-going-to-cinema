const cinemaGoing = require('./cinemaGoing');

describe('cinemaGoing', () => {
  it.only('(500, 15, 0.9) should return 43', () => {
    expect(cinemaGoing(500, 15, 0.9)).toBe(43);
  });

  it('(100, 10, 0.95) should retunr 24', () => {
    expect(cinemaGoing(100, 10, 0.95)).toBe(24);
  });
});
