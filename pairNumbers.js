// You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, 
// where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
// Example
// For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
// sumOfTwo(a, b, v) = true.
// ---
// Input:
// a: [1, 2, 3]
// b: [10, 20, 30, 40]
// v: 42
// Expected Output:
// true
// --- 
// Input:
// a: [1, 2, 3]
// b: [10, 20, 30, 40]
// v: 50
// Expected Output:
// false

let firstArray = [17, 18, 0, 72, -6, 15, 83, 90, 8, 18];
let secondArray = [100, 27, 37, 51, 2, 71, 76, 19, 16, 43];
const v = 37;
for (let number of firstArray) {
    let result = v - number;
    secondArray.indexOf(result) !== -1
        ? console.log('true', number, '+', result, '=', v)
        : console.log('false');
}
// v = v - firstArray[1];
// let result = secondArray.indexOf(v);
// result in secondArray ? console.log('true') : console.log('false');
// console.log(v)
