const findTheOldest = require('./findTheOldest')

describe('findTheOldest', () => {
  test('finds the oldest person!', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Georgio",
        yearOfBirth: 1962,
        yearOfDeath: 2022,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
      {
        name: "Jimbo",
        yearOfBirth: 1942,
        yearOfDeath: 1989,
      },
      {
        name: "Tim",
        yearOfBirth: 1958,
        yearOfDeath: 2007,
      },
      {
        name: "Stew",
        yearOfBirth: 1902,
        yearOfDeath: 1939,
      },
    ]
    expect(findTheOldest(people).name).toBe('Georgio');
  });
  test('finds the oldest person if someone is still living', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
  });
  test('finds the oldest person if the OLDEST is still living', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Carly');
  });
});
