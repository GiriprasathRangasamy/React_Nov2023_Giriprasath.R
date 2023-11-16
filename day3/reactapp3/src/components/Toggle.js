import React,{useState} from "react";
function Toggle()
{
    const[name,setName]=useState("Kaioken");
    var [count,setCount]=useState(0);
    function transfermationHandler()
    {
       // let val=count;
        setCount(count+1);
        if(count===3)
        {
        if(name==="Kaioken")
        {
        setName("SuperSaiyan");}
        else
        {
        setName("Kaioken");}
        setCount(0);
        }
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>{name}</h1>
            <button onClick={transfermationHandler}>toggle</button>
        </div>
    )
}
export default Toggle;