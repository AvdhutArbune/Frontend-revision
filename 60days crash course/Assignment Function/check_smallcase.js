// Write a function to check if the char is a small case or not.
function smallcase(str){
    let str1=str.toLowerCase()
    if(str1===str){
        return true
    }
    else{
        return false
    }
}
console.log(smallcase("a"));
console.log(smallcase("B"));
console.log(smallcase("A"));
console.log(smallcase("A"));
