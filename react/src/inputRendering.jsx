// in this question we have the Problems that react dont have the control in form 
import { useState } from "react";
// first approach
function Practice3(){
    const [text,setText]=useState("");   // always put "blank" in input field

    const onchangetext=(event)=>{   // to target the particular elements we use event
        return setText(event.target.value);
    }
    // onClick will not work  so onChange will work
    // we cane also do text.Uppercase or lower case like that
    return (
        <div>
            <label htmlFor="name">Enter the text: </label>
            <input onChange={onchangetext} value={text} type="text" /> 
            <p>value:{text} </p>
        </div>
    )
}
export default Practice3;