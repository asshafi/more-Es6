const numbers = [12, 34, 54, 54, 3];
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
    // const doubled = number * 2;
        const doubled = doubleIt(number);
    output.push(doubled);
    }
    return output;
}
const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
/*
purpose:
1. get an array
2. for every elements of the array do something
3.store the result in an array
4.return the result array

**/ 

const result = getDoubles(numbers);

// function doubleIt(number) {
//     return number * 2;
// }
console.log(makeDoubleDirect);