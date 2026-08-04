// * For loop
// for (let i = 1; i <= 10; i++) {
//  console.log("Hello-",i);
    
// }


// for (let i = 10; i >=1; i--) {
//  console.log("Hello-",i);
// }


// for (let i = 1; i <= 10; i++) {
 
//     if (i==5) {
//         break;
//     }else{
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 10; i++) {
 
//     if (i==5) {
//         continue;
//     }else{
//         console.log(i);
//     }
// }


// for(;;){
//     console.log("hello"); //infinite
// }

// * While loop
// let i=1
// while (i <= 10) {
    //     console.log(i);
    //     i++
    // }
    
    
// * Do-While loop
//init
// let i = 1;
// do {
//      //logic
//      console.log(i);
//      //updation
//      i++;
//  } while (i <= 10);

// * Strings
// let firstname = "java Script";


// let fullName=`java
// Script`;
// console.log(firstname);
// console.log(fullName);

// let firstName= new String("javaScript")
// console.log(firstName.valueOf());

// let op1="English "
// let op2="Hindi"
// let result = op1 + op2
// console.log(result);

// let result = `${op1 + op2}`;
// console.log(result);

let sentence = "java\\Script \\is \"Scripting\" \\language";
let word =sentence.split("\\");
console.log(word.join(""));
