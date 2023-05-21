import "./css/style1.css";
import { useState } from "react";
const Inlinefunction=()=>{
    const [first,setFirst]=useState("");
    const [second,setSecond]=useState("");
    const [email,setEmail]=useState("");

    return (
        <div className="container">
             <label>First name:</label>
            <input onChange={(event)=>{          // we can directly pass the function in them 
               setFirst(event.target.value);      // arrow function this is anomunous function
            }}
             type="text" 
             value={first} 
             placeholder="john" /> 

            <label>Second name:</label>
            <input onChange={(event)=>{
                 setSecond(event.target.value);
            }} 
             type="text" 
             value={second} 
             placeholder="chena" />

            <label>Email:</label>
            <input onChange={(event)=>{
                 setEmail(event.target.value);
            }} 
             type="text" 
             value={email} 
             placeholder="johnchena@110" /> 
        </div>
    )
};
export default Inlinefunction