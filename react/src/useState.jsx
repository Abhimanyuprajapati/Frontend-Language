import { useState } from "react";

const Practice1=()=>{
    // let count=0;
    // function incrementsadd(){           this will not work in this react will not take
    //     return count++;
    // }                                     here rerender is not hepping because react does not 
    //                                    support this 
    // -----------------------------------------------
    // here the comes useState into the picture
    // useState always returns an arrays
    const [count, setCount] = useState(0);
    function incrementsadd(){        // we can also create const incrementsadd=()=>{}  arrow function
      return setCount(count+1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementsadd}>increment</button>
        </div>
    )
}
export default Practice1;