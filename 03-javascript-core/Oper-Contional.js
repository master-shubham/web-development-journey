let num1 = 10;
let num2 = 20;

// *Artihmetic
// console.log("num1+num2=",num1+num2);
// console.log("num1-num2=",num1-num2);
// console.log("num1*num2=",num1*num2);
// console.log("num1/num2=",num1/num2);
// console.log("num1%num2=",num1%num2);
// console.log("num1**num2(power)=",num1**num2);

// *Unary
// console.log(++num1);

// *Assignment
// let result =100
// result+=num1
// console.log(result);

// *comparison

// let result = num1 > num2
// console.log(result);

// *Strict equality
// console.log('5' === 5);  // false

// *Loose equality
// console.log('5' == 5); //true

// *Ternary
// let age=19
// let result =
//   age >= 18 ? "You are aligible to vote" : "You are not aligible to vote";
// console.log(result);

// *Logical
// console.log(false || false || true); // true
// console.log(false && false && true); // false

// console.log(false != false != true); // true
// 1. false != false = false
// 2. false != true = true
// final answer -> true

// * Short-circaiting
// console.log(false || 7 || 4 || 6); //7

// Bitwise
// console.log(2 & 5);
// console.log(2 | 5);
// console.log(~(1));
// console.log(5<<3); // 5 * 2^3
// console.log(10>>1); // 5 / 2^1

// conditonal

let num = 5;
// if (num == 1) {
    //   console.log("A");
// } else if (num == 2) {
    //   console.log("B");
// } else if (num == 3) {
    //   console.log("C");
// } else if (num == 4) {
    //   console.log("D");
    // } else if (num == 5) {
        //   console.log("E");
// } else {
//   console.log("Fail");
// }

switch (num) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  case 4:
    console.log("D");
    break;
  case 5:
    console.log("E");
    break;
default:
    console.log("Fail");
    break;
}