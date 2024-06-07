const { faker } = require("@faker-js/faker");

// faker creates new data when called

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(getRandomUser());
