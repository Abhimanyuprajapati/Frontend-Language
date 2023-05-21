import { useState } from "react";
import "./css/style2.css";
// render the list of increasing number 
// function RenderList(){
//     const [numbers, setNumber]=useState([1]);
    // const add=()=>{
    //     // take the last number in the array
    //     const lastnumber=numbers[numbers.length-1];

    //     // add 1 on its
    //     const nextnumber=lastnumber+1;
    //     // add new number to the array
    //     numbers.push(nextnumber);
    //     // call the setnumber
    //     setNumber(numbers);
    //     // react does not rerender the elements because the reference is the same

    // }
/*    

    const add=()=>{
        const lastnumber=numbers[numbers.length-1];
        const nextnumber=lastnumber+1;
        // new reference is given to the react 
        const nextnumberss=[...numbers,nextnumber];
        // now react is happy 
        setNumber(nextnumberss);
    }

    return (
        <div className="container">
            <section>
                {numbers.map((num)=>{
                return <h3>{num}</h3>
                })}
            </section>
            <button onClick={add}>Add me</button>
        </div>
    )
}
export default RenderList;

*/
// Practice again
const RenderList=()=>{
    const [number,setNumber]=useState([1]);
    const add=()=>{
        const lastnumber=number[number.length-1];
        const nextnumber=lastnumber+1;
        const num=[...number,nextnumber];
        setNumber(num);
    }
    return (
        <div className="container">
        <section>{number.map((item)=>{
            return <h3>{item}</h3>
        })}</section>
        <button onClick={add}>Add me</button>
    </div>
    )
}
export default RenderList;
