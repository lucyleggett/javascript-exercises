const getAge = function (person) {
        person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people) {
const ranked = people.toSorted(
(person, nextPerson) => getAge(nextPerson) - getAge(person),
);

const oldest = ranked[0];
return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
