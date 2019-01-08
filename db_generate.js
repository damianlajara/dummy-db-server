// Create your API here
// The Following is an example of what you can do

const faker = require("faker");
const times = require("lodash/times");

module.exports = function() {
  return {
    people: times(10, i => ({
      id: faker.random.uuid(),
      name: faker.name.findName()
    }))
  }
}