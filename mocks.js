const faker = require('faker')
module.exports = {
  Int: () => faker.random.number(),
  Float: () => faker.random.number() / 3,
  String: () => faker.random.word(),
}
