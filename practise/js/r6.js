// destructuring the elements
const arr=[10,122,154,3,45,85,2,12];
function arrSort(elements){
    // while using arr.sort it give random value not sorted arrays
    // return elements.sort();   
    return elements.sort((a,b)=>{   // this will give us two arguments 
       // return b-a;    // b-a will give only decending order higher to lower value
       return a-b;      // a-b  will give only asscending order lower to higher value
    });   
}
const [a,b,c,d,e,f,g,h]=arrSort(arr);
console.log(a,b,c,d,e,f,g,h);
console.log(a+c+h);