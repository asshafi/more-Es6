const numbers = [12, 5, 25, 20, 34, 54, 23, 54, 65, 65, 24, 65, 76, 32, 76];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(n => n % 5 === 0);
console.log(fives);
console.log(fivesAll);