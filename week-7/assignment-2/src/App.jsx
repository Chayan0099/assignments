
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";
function App(){
  const [color, setColor] = useState(); 
  return (
    <div style={{backgroundColor:color}}>
      <div className="flex items-center justify-end flex-col w-screen h-screen">
        <div className="flex gap-7 mb-20"> 
        <Buttons color="red" setColor={setColor}/>
        <Buttons color="yellow" setColor={setColor}/>
        <Buttons color="green" setColor={setColor}/>
        <Buttons color="purple" setColor={setColor}/>
        <Buttons color="blue" setColor={setColor}/>
        <Buttons color="cyan" setColor={setColor}/>
        </div>
      </div> 
     
    </div>
  );
}

function Buttons ({ color, setColor }) { 
  return <button onClick={() => { setColor(color)}}className="p-3 text-xl rounded-lg" style={{backgroundColor: color}}>
    {color}
  </button>
}

export default App;
