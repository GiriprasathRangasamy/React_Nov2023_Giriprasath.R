import React,{useState} from "react";
function Listitems()
{
    const [students]=useState([
        {id:"52",name:"Giri"},
        {id:"55",name:"gousik"},
    ])

return(
<div>
    <table style={{border:"2 solid balck"}}>
        <th>id</th>
        <th>name</th>
    {students.map((s)=>(
        <tr>
        <td key={s.id}>
            <h1>{s.id}</h1>
            </td>
            <td key={s.id}>
            <h1>{s.name}</h1>
            </td>
        </tr>
    )
    )}
    </table>
</div>
);
    }
export default Listitems;