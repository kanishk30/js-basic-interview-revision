// const p1 = {
//     name: 'JOhn',
//     age: 30,
//     printNameAge: function (location, country) {
//         console.log(this.name, this.age, location, country)
//     }
// }

// p2 = {
//     name: 'Alice',
//     age: 20,

// }
// p1.printNameAge("bombay", "Bharat")
// p1.printNameAge.call(p2, "Delhi", "India")
// p1.printNameAge.apply(p2, ["Delhi", "India"])


// // calculate maximum of array elements
// const nums = [5, 6, 2, 3, 7]; // 7
// // const res = Math.max(nums);
// // console.log(res) // NaN

// const res = Math.max.apply(null, nums)
// console.log(res)

// console.log(Math.max.call(null, 5, 6, 2, 3, 7));



let user = {
    name: 'Alice',
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};


const user2 = {
    name: 'Bob',
    age: 30
};

let boundGreetFunc = user.greet.bind(user);
let boundGreetFunc2 = user.greet.bind(user2);

boundGreetFunc()
boundGreetFunc2()





