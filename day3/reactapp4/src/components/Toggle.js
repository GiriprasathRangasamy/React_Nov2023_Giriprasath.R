import React,{useState} from "react";
function Toggle()
{
    const[message,setMessage]=useState(false);
    function Touch()
    {
        if(!message)
        {
            setMessage(true);
        }
        else
        {
            setMessage(false);
        }
    }
    return(
    <div style={{textAlign:'center'}}>
        <h1>Dashboard</h1>
        <button onClick={Touch}>{message ? "Hide":"Show"}</button>
        {message && <p>Hi how are you!</p>}
    </div>
    );
}
export default Toggle;
