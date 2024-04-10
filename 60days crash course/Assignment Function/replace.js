//Problem 5: Write a function to replace spaces in a given string with - .

//statement : "The quick brown fox jumps over the lazy dog"

function replace(str){
    let str1=str.replace(" ","-")
    return str1
}
let str="The quick brown fox jumps over the lazy dog";
s=""
for(let i=0;i<str.length;i++){
    s+=replace(str[i])
}
console.log(s);