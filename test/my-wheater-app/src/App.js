import logo from './logo.svg';
import './App.css';
import Input from './input';
import {useState,useEffect} from "react";
import fetchData from './fetchdata';

function App() {

const [data,setData] = useState();
const [userInput, setUserInput] = useState();

useEffect(()=>{
  setData(fetchData(userInput))
},[userInput])



  
  return (
    <div className="App">
     <Input userInput={userInput} setUserInput={setUserInput} />
     {data &&
      <p>{data.cnt}</p>
     }
    </div>
  );
}

export default App;
