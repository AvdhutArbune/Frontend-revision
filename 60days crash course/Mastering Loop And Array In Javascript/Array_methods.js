// Task 1: Mapping to Doubles
// Use the .map() method to create a new array doublesArray that contains each element of numbersArray doubled.
// Output doublesArray to the console.

numbersArray = [2,3,7,8,10.13,15,18,34,25]
let n=numbersArray.map(function(e){
    return e*2
})
console.log(n);

// Task 2: Filtering Evens
// Use the .filter() method to create a new array evenNumbersArray that contains only the even numbers from numbersArray.
// Output evenNumbersArray to the console.
let arr=[1,2,3,4,56,7,8,9]
arr2=arr.filter(function(e){
    return e%2===0
})
console.log(arr2);


// Task 3: Summation
// Use the .reduce() method to calculate the sum of all elements in numbersArray. Output the sum to the console.

let Array=[1,2,3,4,5,7,8,9]
let Array2=Array.reduce(function(acc,curr){
    return acc+curr
},0)
console.log(Array2);