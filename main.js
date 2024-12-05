// var a = 1;
// console.log(a); // 1


// console.log(b); // undefined
// var b = 2;

// console.log(c); // Reference error
// let c = 3;


// function one() {
//     two()
// }

// function two() {
//     three()
// }

// function three() {
//     console.log('HI')
// }

// one()

// function greet() {
//     console.log(msg)
// }

// var msg = "Hello World"
// greet()



// function greet() {
//     sayHNW()
//     function sayHNW() {
//         console.log(msg)
//     }
// }
// var msg = "Happy New Year"
// greet()


// function greet() {
//     var msg = "Happy New Year";
//     sayHNW();
//     function sayHNW() {
//         console.log("inner", msg);
//     }
// }


// greet();
// console.log("outer", msg)

// function parent() {
//     let a = 'kanishk'
//     function child() {
//         console.log(a);
//         function child2() {
//             const a = 10;
//             console.log(a)
//         }
//         child2()
//     }
//     child();
// }
// parent()



// function fun() {
//     var x = 100
//     const a = 2; // block starts from 73 
//     const b = 2; // block starts from 73 
//     if (a === b) {
//         let c = 3; // block starts from 76 till 79. 
//         console.log(c)
//     }

//     // console.log(c, 'true...'); // ReferenceError: c is not defined

//     console.log(a)
//     console.log(b)
//     {
//         let d = 10; // line 85-87 only.
//     }
//     console.log(d)

// }
// fun()
// console.log(x); // ReferenceError: x is not defined




// console.log("befire", new Date())
// setTimeout(() => {
//     console.log("inside settimeout", new Date())
// }, 2000);
// console.log("after", new Date())


// console.log('start')
// setTimeout(() => {
//     console.log("inside settimeout", new Date())
// }, 0);
// console.log('end')


// Promises...
// Step1 :: Create a promise
// const p = new Promise(function (resolve, reject) {
//     if (1 > 3) {
//         resolve('Maths is awesome...')
//     } else {
//         reject("I dont like maths...")
//     }
// })

// p
//     .then((val) => {
//         console.log("in then block::", val);
//         return val
//     })
//     .then((param) => console.log(param, "I WIN!!!!"))
//     .catch(e => console.log("CATCH ERROR:", e))
//     .finally(() => console.log("IM DONE"))





// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(1, 2))

// const sum1 = (a, b) => {
//     return a + b;
// }

// const sum2 = (a, b) => a + b;

// console.log(sum1(1, 2))
// console.log(sum2(1, 2))


// console.log("Start");
// setTimeout(() => {
//     console.log("settimeout calls")
// }, 0);
// const promise1 = Promise.resolve("promise calls.."); // 5sec to over...
// promise1.then((value) => {
//     console.log(value);
// });

// console.log("end");

// console.log('start');
// new Promise((resolve) => {
//     console.log('promise created');
//     resolve();
// }).then(() => {
//     console.log('promise resolved');
// });
// console.log('end');


// async await

// async function getData() {
//     return "data";
// }

// // const result = await getData()
// // console.log(result) // error. await can only be used insode async keyword

// getData().then((res) => console.log(res)) // data



// using async await...

function resolveAfter2Sec() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            // res("RESOLVED SUCCESSFULLY")
            reject("Something went wrong...")
        }, 2000)
    })
}

// async function fethcData() {
//     try {
//         console.log("calling api...")
//         const result = await resolveAfter2Sec(); // just like then block. 
//         console.log(result)
//     } catch (e) {
//         console.log("Catch block", e)
//     }

// }

// fethcData()

// ex2.
// async function func() {
//     const res1 = await new Promise((res) => res("1"))
//     const res2 = await new Promise((res) => res("2"))
//     console.log(res1)
//     console.log(res2)
// }
// func()

async function fetchApiData() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const resp = await data.json()

        return resp;
    } catch (err) {
        console.log("CATCH BLOCK", err)
    }
}

fetchApiData().then((res) => console.log(res.name))

// without aysnc await.
function fetchResult() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(data => data.json())
        .then(res => console.log(res.name))
        .catch(e => console.log(e))
}
fetchResult()


// practice
// [1,2,3,[4,5,[6,7,8]]] >>> [1,2,3,4,5,6,7,8]