
// Instructions
// Given a list of user data with name and age, create a list of key-value pairs from the input
// From the generated data, print the users whose age is more than 30
// Sample Input
// ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
// [32, 30, 26, 28, 44]

// Sample Data Stored [] - List {} - Key-Value Pairs
// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

// Sample Output
// Nrupul Yogesh

let details={
    data:[],
    Info:function(name,age){
        for(let i=0;i<name.length;i++){
            let obj={
                name:name[i],
                age:age[i]
            }
            this.data.push(obj)
        }
    },
    print:function(){
        console.log(this.data);
    },
    Above_30:function(){
        let above_30=""
        for(let i=0;i<this.data.length;i++){
            let person_age=this.data[i]
            if(person_age.age>30){
                above_30+=person_age.name+" "
            }
        }
        console.log(above_30);
    }
}
details.Info(["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"],[32, 30, 26, 28, 44])
// details.print()
details.Above_30()