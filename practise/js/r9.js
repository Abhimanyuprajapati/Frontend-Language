/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

*/
//                                     ANSWER

/*

function createCounter(init){
    let value=init;
    let count=init;
    let creatObject={
        increment : ()=>{
           return ++count;
        },
        decrement : ()=>{
            return --count;
        },
        reset : ()=>{
            return value;
        }

    }
    return creatObject;
}

const counter = createCounter(5);
counter.increment(); 
counter.reset();
counter.decrement(); 
console.log(counter);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());

*/

// function createCounter(init){
//     let value=init;
//     let count=init;
//     let createObject={
//         incre : ()=>{
//             return  ++count;
//         },
//         decre : ()=>{
//             return --count;
//         },
//         reset : ()=>{
//             return count=value;
//         }
//     };
//     return createObject;
// };
// console.log("hello")
// let counter=createCounter(10);
// console.log(counter.decre());
// console.log(counter.incre());
// console.log(counter.incre());
// console.log(counter.reset());

//                              main answer
var createCounter = function(init) {
    let count=init;
    let value=init;
    let result={
        increment:()=>{++count},

        decrement:()=>{--count},

        reset : () => {count = value},
            
    }
    // return result;

    //  let counter = init;
    // let resetVal = init;

    // let obj = {
    //     increment : () => ++counter,
    //     decrement : () => --counter,
    //     reset : () => counter = resetVal
    // }

    // return obj;
     return result;

};

