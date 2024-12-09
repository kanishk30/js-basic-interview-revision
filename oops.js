// // scenario 1
// console.log("scenario 1", this); // window object

// function fun() {
//     console.log("senario2", this) // window object
// }

// fun();

// function Car(company, model) {
//     console.log("secanrio 3", this); // Car instantace;  Car { make, type, displayInfo }
//     this.make = company;
//     this.type = model;

//     this.displayInfo = function () {
//         console.log(`Car: ${this.make} ${this.type}`)
//     }

// }

// const kanishksCar = new Car("Kia", "Sonet");
// const abhisheksCar = new Car("Swift", "Dzire");

// kanishksCar.displayInfo()

// // s4
// // this -> obj -> fn == object itself
// var obj = {
//     a: 1,
//     funcHello: function () {
//         console.log("scenario4:", this)
//     }
// }
// obj.funcHello()


// // s5

// // this -> obj -> fn -> fn == global object
// // since nestedFn is not a method of obj. 
// var obj2 = {
//     func: function () {
//         var nestedFn = function () {
//             console.log("secario5", this)
//         }
//         nestedFn()
//     }
// }
// obj2.func();


// // scenario 6 : arrow functions...

// const boy = {
//     name: "john",
//     arrow: () => console.log(`arrow:: ${this.name}`),
//     regular: function () {
//         console.log(`regular:: ${this.name}`)
//     }
// }
// boy.arrow(); // 
// boy.regular(); // regular:: john

// const joe = {
//     nickName: "Joe",
//     eventuallySayName: function () {
//         function actuallySayName() {
//             console.log(`first: ${this.nickName}`); // first undef9ned
//         }


//         // Create an arrow function
//         const actuallySayNameWithArrow = () => {
//             console.log(`second: ${this.nickName}`); // secnd joe
//         };


//         // Call that in 1 second
//         setTimeout(actuallySayName, 1000);
//         setTimeout(actuallySayNameWithArrow, 1000);
//     },
//     arrow: () => console.log(`arrow: ${this.name}`),
//     regular: function () {
//         console.log(`regular: ${this.name}`);
//     },
// };
// // window.name = 'ALice' // only change gor arrow: Alice

// joe.arrow(); // arrow
// joe.regular(); // regular undefined
// joe.eventuallySayName();

// const animal = {
//     eats: true,
//     sleep: true,
// }

// const rabbit = {
//     isHerbivore: true
// }
// console.log(animal)
// console.log(rabbit)
// rabbit.__proto__ = animal;
// console.log(rabbit)
// console.log(rabbit.eats)



// longer verison of prototype chaining...
const animal = {
    eats: true,
    sleep: true,
    walk() {
        console.log('the animal walk')
    }
}
console.log(animal);

const herbivore = {
    eatsMeat: 'naah',
    __proto__: animal
}
const carnivore = {
    eatsMeat: 'yes',
    __proto__: animal
}
const rabbit = {
    canJump: true,
    __proto__: herbivore
}
const tiger = {
    canKill: true,
    __proto__: carnivore
}

console.log(rabbit.eatsMeat);
console.log(tiger.eatsMeat);


