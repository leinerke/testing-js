const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: '62b11a8a1946f8e5c2e20698',
    name: 'harry popoter',
  },
  {
    _id: '62b11a8a1946f8e5c2e20698',
    name: 'harry popoter y la piedra filosofal',
  },
];

const MongoLibStub = {
  getAll: () => fakeBooks,
  create: () => {},
};

jest.mock(
  '../lib/mongo.lib',
  () => jest.fn().mockImplementation(() => MongoLibStub),
);

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });

    test('Should return a list books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('harry popoter');
    });
  });
});
