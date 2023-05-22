// closure function return always Hello World even having multiple arguments
/*
Write a function createHelloWorld.
 It should return a new function that always returns "Hello World".
Example 1:
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"
The function returned by createHelloWorld should always return "Hello World".
*/


var args="akash";
 var closure1 =function(){
    return function(...args){
        return "hello world";
    };
 };

// var result=closure1(...args)
// console.log(result);    // this will return only the function ( hole function )   result: f(){...}
// console.log(result());  // this will call the function     result: hello world
//  console.log(closure1());  //this will return only the function ( hole function )   result: f(){...}
// console.log(closure1()());  // this will call the function     result: hello world