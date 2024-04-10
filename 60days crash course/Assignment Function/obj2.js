/*### **Products Cart Object**

- Given an input of products in the below format (Name Quantity Price)
- Input

```
["Rice", "Dal", "Salt"]
[2, 3, 1]
[60, 50, 20]

```

- Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
- Sample output for the above case `290`*/

details={
    data:[],
    Info:function(name,quantity,price){
        for(let i=0;i<name.length;i++){
            let obj={
                name:name[i],
                quantity:quantity[i],
                price:price[i]
            }
            this.data.push(obj)
        }
    },
    print:function(){
        console.log(this.data);
    },
    total:function(){
        total=0;
        for(let product of this.data){
            total+=product.quantity*product.price
        }
        console.log(total);
    }
}
details.Info(["Rice","Dal","Salt"],[2,3,1],[60,50,20])
details.print()
details.total()