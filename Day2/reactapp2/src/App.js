function App() {
  const mystyle1={
    color:"darkblue",
    fontSize:16,
    backgroundColor:" #ADD8E6",
    border:"1px solid blue",
    borderRadius:5
  };
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"Green"}}>Inline Style in JXS Example</h1>
      <p style={mystyle1}>This is a paragraph with inline</p>
    </div>
  );
}

export default App;
