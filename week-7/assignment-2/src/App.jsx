
import { RecoilRoot, useSetRecoilState } from "recoil";
import { ColorAtom } from "./components";

function App(){
  return (
    <div >
      <ColorBar />
    </div>
  );
}

function ColorBar() {
  const containerStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <RecoilRoot>
        <Buttons color="red" />
        <Buttons color="yellow" />
        <Buttons color="green" />
        <Buttons color="purple" />
        <Buttons color="blue" />
      </RecoilRoot>
    </div>
  );
}

function Buttons ({ color }) {
  const setColor = useSetRecoilState(ColorAtom);  
  const buttonStyle = {
    backgroundColor: color,
    padding: '10px 20px',
  }
}

export default App;
