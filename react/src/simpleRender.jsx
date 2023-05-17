import { useState } from "react";
import "./css/style.css";

const Practice2=()=>{
   const [count,setCount]= useState(0);
   const increment=()=>{
   return setCount(count+1);
   }
   const decrement=()=>{
   return setCount(count-1);
   }
    return (
        <div className="container">
            <button onClick={decrement} className="size">-</button>
            <div className="mainaa">
                <p>{count}</p>
            </div>
            <button onClick={increment} className="size">+</button>
        </div>
    )
}
export default Practice2;