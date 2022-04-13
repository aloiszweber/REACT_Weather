import logo from './logo.svg';
import './App.css';
import Input from './input';
import {useState} from "react";

function App() {

const [okok, setOkok] = useState();
console.log(okok);
  
  return (
    <div className="App">
     <Input okok={okok} setOkok={setOkok}/>
    </div>
  );
}

export default App;
