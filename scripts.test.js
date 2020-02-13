const sum = require('./scripts.js');

describe('Functions do math', () => {
  document.body.innerHTML = test('it adds', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
