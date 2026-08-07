// Calculator Function


function calculate(num1,num2,operation) {
   try {
    
     switch (operation) {
       case "+":
         alert(`${num1}+${num2} is :${num1 + num2}`);
         break;
       case "-":
         alert(`${num1}-${num2} is :${num1 - num2}`);
         break;
       case "*":
         alert(`${num1}*${num2} is :${num1 * num2}`);
         break;
       case "/":
         alert(`${num1}/${num2} is :${num1 / num2}`);
         break;
       case "%":
         alert(`${num1}%${num2} is :${num1 % num2}`);
         break;
       case "**":
         alert(`${num1}**${num2} is :${num1 ** num2}`);
         break;

       default:
         console.log("Invalid Choise | Try again.");
         main();
         break;
     }


   } catch (error) {
        alert("number can not divied by zero.");

        if(confirm("shall you start again ?")){
            main();
        }else{
            return;
        }
    
   }
}


function main() {
    let userOperation = prompt(
      "Enter operation do you perform(+,-,*,/,%,**) ?",
    );
    let num1 = Number(prompt("Enter Num1:"))
    let num2 = Number(prompt("Enter Num2:"))
    calculate(num1, num2, userOperation);
}
main()