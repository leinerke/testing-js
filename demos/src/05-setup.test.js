describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll 1');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 1).toBe(2);
  });

  describe('other', () => {
    beforeAll(() => {
      console.log('beforeAll 2');
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(1 + 1).toBe(2);
    });
  });
});
