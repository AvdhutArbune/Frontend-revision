//Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle.

// details={
//     data:[],
//     Info:function(length,width){
//         let obj={}
//         obj.length=length;
//         obj.width=width;
//         this.data.push(obj)
//     },
//     print:function(){
//         console.log(this.data);
//     },
//     rectangle_Ap:function(){
//         area_of_rectangle=0;
//         perimeter_of_rectangle=0
//         for(let i=0;i<this.data.length;i++){
//             let measurement_of_rectangle=this.data[i]
//             area_of_rectangle+=measurement_of_rectangle.length*measurement_of_rectangle.width;
//             perimeter_of_rectangle+=2*(measurement_of_rectangle.length+measurement_of_rectangle.width)
//         }
//         console.log(area_of_rectangle,perimeter_of_rectangle);
//     }
// }
// details.Info(50,30)
// details.rectangle_Ap()
// // details.print()
// // details.Info(60,40)
// // details.rectangle_Ap()



let details={
    data:[],
    Info:function(length,width){
        let obj={}
        obj.length=length;
        obj.width=width;
        this.data.push(obj)
    },
    print:function(){
        console.log(this.data);
    },
    rectangle_Ap:function(){
        area_of_rectangle=0;
        perimeter_of_rectangle=0;
        for(let i=0;i<this.data.length;i++){
            let rectangle_measurement=this.data[i]
            area_of_rectangle+=(rectangle_measurement.length * rectangle_measurement.width)
            perimeter_of_rectangle+=2 *(rectangle_measurement.length + rectangle_measurement.width)
        }
        console.log(area_of_rectangle,perimeter_of_rectangle);
    }
}
details.Info(50,30)
details.print()
details.rectangle_Ap()