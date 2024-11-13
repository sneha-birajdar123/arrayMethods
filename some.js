let num = [1, 9, 2, 4, 7, 1, 6, 8]
let check = num.some((x) => x % 2 == 0)
console.log(check);


let fruits = ['apple', 'banana', 'cherry', 'date'];
let hasBanana = fruits.some((fruit) => fruit == 'banana');
console.log(hasBanana);  


let values = [0, null, undefined, '', 'Hello'];
let hasTruthy = values.some((value) => value);
console.log(hasTruthy);  
