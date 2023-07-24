const cinemaGoing = require('./cinemaGoing');

describe('cinemaGoing', () => {
  it('(500, 15, 0.9) should return 43', () => {
    expect(cinemaGoing(500, 15, 0.9)).toBe(43);
  });
});
