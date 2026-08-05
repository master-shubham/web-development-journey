
// class Human {
//   // propertis
//   age = 19; //public
//   #wt = 60; //private
//   ht = 180;

//   constructor(newAge,newHt){
//     this.age=newAge
//     this.ht=newHt
//   }

//   // behaviour
//   walking() {
//     console.log("I am walking.");
//   }

//   running() {
//     console.log("I am running.");
//   }

//   get fetchW() {
//     return this.#wt;
//   }

//   set weight(wt) {
//         this.#wt=wt;
//   }
// }

// let obj = new Human(19,170);
// console.log(obj);

// obj.walking()
// console.log(obj.fetchW);
// obj.weight=50
// console.log(obj.fetchW);

function getAge(){
    return 190;
}
function utility(name="Love", age=getAge()) {
    console.log("Name=",name);
    console.log("Age=",age);
    
}
utility()