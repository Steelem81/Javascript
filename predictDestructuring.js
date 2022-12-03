//!Problem 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //*First will print Tesla, then it will print Mercedes
// console.log(randomCar)
// console.log(otherRandomCar)

// !Problem 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //*it will throw an undefined error since name is a key and has not been assigned to a variable; otherwise otherName would print Elon
// console.log(name);
// console.log(otherName);

//!Problem 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //* First line will print 12345 secondline will throw an undefined error since there is no password key in the person object
// console.log(password);
// console.log(hashedPassword);

//!Problem 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //*  first line will print false (2 <> 5) second line will print true
// console.log(first == second);
// console.log(first == third);

//! Problem 5
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //* first it will print 'value', second key will print [1, 5, 1, 8, 3, 3], third will print 1, fourth will print 5
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);






