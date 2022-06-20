// matchers
test('test obj', () => {
  const data = { name: 'Nico' };
  data.lastName = 'Molina';
  expect(data).toEqual({ name: 'Nico', lastName: 'Molina' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect(1).toBeTruthy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('arrays', () => {
  expect([1, 2, 3, 4, 5, 6, 7, 8, 9]).toContain(3);
});
