const findTheOldest = function(array) {
    let oldest = '';
    let currentOldest = 0;
    array.forEach(person => {
        if (!('yearOfDeath' in person)) {
            person.yearOfDeath = (new Date()).getFullYear();
        }
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age > currentOldest) {
            currentOldest = age;
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
