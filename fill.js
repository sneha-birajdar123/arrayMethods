let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); 


let array = [1, 2, 3, 4, 5];
 let check = array.fill(0, 1, 4);
console.log(check); 


let num = [3, 1, 2, 5, 7, 9];
num.fill(1, 2);  // if there is no end value it will return all 1's after the second index 
console.log(num); //[3, 1, 1, 1, 1, 1]