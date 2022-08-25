const numbers = [12, 34, 54, 23, 54, 65, 65, 24, 65, 76, 32, 76];
const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums);
const even = numbers.filter(num => num % 2 === 0);
// console.log(even);


const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'watch', price: 35000 },
    { id: 1, name: 'tablet', price: 25000 },
];
const expensive = products.filter(product => product.price > 100000);