import React, { useEffect, useState } from "react";

function App() {
  const [mouseLocation, setMouseLocation] = useState({x:0,y:0});

  useEffect(()=>{
    window.addEventListener('mousemove',()=>{
      
    })
  })
  return <div>hello world</div>;
}
export default App;
