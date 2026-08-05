let obj = {
    name:"shubham",
    age:19,
    weight:50,
    height:"5.7ft",
    greet:function(){
        console.log("Hello");
    }   
}

obj.color = "pink"
// console.log(obj);


// let cloneObj = {...obj}


// console.log(cloneObj);

// cloneObj.color="white"
// console.log(cloneObj);


// let dest = Object.assign({},obj)

// console.log(dest);

let dest={}
for (const key in obj) {
    dest[key]=obj[key]
}

console.log(dest);
