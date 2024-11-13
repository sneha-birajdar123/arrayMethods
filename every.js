// let numbers = [1, 2, 3, 4, 5];
// let allPositive = numbers.every(
//     num =>{

//     return num > 0
// })
// console.log(allPositive); 


let numbers = [1, 2, 3, -4, 5];
let allPositive = numbers.every(
    num => {
        num > 0
    });
console.log(allPositive); 



let array = [-1, -2, -3, 4, 5, -6]
let check = array.every(
    num => {
      num < 0
    }
)
console.log(check);
