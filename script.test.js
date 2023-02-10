const googleSearch = require('./script')

MockDb = [
  'dog.com',
  'cheese_puff.com',
  'disney.com',
  'dog_pictures.com'
]

it("this is a simply test", () => {
  expect('hello').toBe('hello')
  // expect('hello').toBe('hello')
  // googleSearch('testtest', MockDb)
});

it("this is searching google test", () => {
  expect(googleSearch('testtest', MockDb)).toEqual([])
  expect(googleSearch('dog', MockDb)).toEqual(['dog.com','dog_pictures.com'])
  // expect(googleSearch('dg', MockDb)).toEqual(['dog.com','dog_pictures.com'])
});
