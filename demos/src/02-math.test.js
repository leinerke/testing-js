const { divide, multiply, sum } = require('./02-math');

test('add 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('add 2 * 3 should be 6', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(4);
});

test('add 2 / 2 should be 1', () => {
  const rta = divide(2, 2);
  expect(rta).toBe(4);
  const rta2 = divide(6, 0);
  expect(rta2).toBeNull();
});
