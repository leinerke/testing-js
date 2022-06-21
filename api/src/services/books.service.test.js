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

const mockGetAll = jest.fn();

/*
const MongoLibStub = {
  getAll: spyGetAll,
  create: () => {},
};
 */

jest.mock(
  '../lib/mongo.lib',
  () => jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  })),
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
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a list books', async () => {
      // Arrange
      mockGetAll.mockResolvedValue([
        {
          _id: '62b11a8a1946f8e5c2e20698',
          name: 'harry popoter y la piedra filosofal',
        },
      ]);
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });
  });
});
