import Props from "./components/Props";

function App() {
  function getvalue()
  {
    var name1=document.getElementById("Name").value;
    var email1=document.getElementById("email").value;
    var feedback1=document.getElementById("feedback").value;
    //<Props name={name1} email={email1} feedback={feedback1} />
   
  }
  return (
    <div style={{textAlign:'center'}}>
        <h4>Name:</h4>
        <input type="text" id='Name' />
        <br />
        <h4>Email Id:</h4>
        <input type="email" id="email"/>
        <br />
        <h4>Feedback:</h4>
        <textarea id="feedback"/>
        <button onClick={getvalue}>Submit</button>
        <h1>{name1}</h1>
    </div>
  );
}

export default App;
