import { useState } from "react";

const Practice4 = ()=>{
    const [text, setText]=useState("every thing is fear in love and war");
    const [count , setCount]=useState(0);
    function onclicker(){
        setText("janvee");
        setCount(count+1);
    }

    return(
        <div>
            <p>{text}</p>
            <button onClick={onclicker}>change the title of the text</button>
            <hr />
            <h1>count :{count}</h1>
        </div>
    )
}
export default Practice4;