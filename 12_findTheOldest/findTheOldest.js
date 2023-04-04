const findTheOldest = function(people) {
    const person = people.reduce((oldest, current) => {
        if(!oldest) {
            age1 = 0;
        } else {
            age1 = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        }
        age2 = getAge(current.yearOfBirth, current.yearOfDeath);
        
        return age1 > age2 ? oldest : current;
    });

    return person;
};

const getAge = function(born, died) {
    if (!died) died = 2023;

    return died - born;
}

// Do not edit below this line
module.exports = findTheOldest;
