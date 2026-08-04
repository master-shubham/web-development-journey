// Object
// let obj = {
//     name:"shubham",
//     age:19,
//     weight:50,
//     height:"5.7ft",
//     greet:function(){
//         console.log("Hello");
//     }   
// }
// console.log(obj);
// obj.greet()

// Arrays
// let arr = [1,2,3,4,5,6]
// console.log(arr);

// array constructor
// let arr1= new Array('love',1,true)
// arr1.push("love")
// arr1.pop("love")

// // arr1.shift()
// arr1.unshift("JavaScript")

// // arr1.slice(1,2)
// arr1.splice(1,2,"mehul")
// console.log(arr1);
 
// console.log(arr1[1]);




// let arr = [10,20,11,21,50,60]
// let ansArr = arr.map((val)=>{
    //     return val * val;
    // })

// console.log(ansArr);

// let evenArr = arr.filter((val)=>{

//     return val % 2 === 0;
// })
// console.log(evenArr);

// let arr=[1,4,'a','b',3,'c']

// let strArr = arr.filter((val)=>{
    //     return typeof val === "string";
// })

// console.log(strArr);

let arr = [10,20,11,21,50,60]
// let sumOfArr = arr.reduce((acc,curr)=>acc+curr,0)
// console.log(sumOfArr);


// arr.sort((a, b) => b - a);
// console.log(arr);
// console.log(arr.indexOf(3));

console.log(arr.length);

arr.forEach((val,i)=>{
    console.log("Index-",i,"and Value-",val);
    
})
