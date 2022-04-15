
import Input from './input';
import {useEffect, useState} from "react";





function App() {

const [data, setData] = useState();
const [userInput, setUserInput] = useState();



async function placeData(userInput) {

  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${process.env.REACT_APP_API_KEY2}&units=metric`)
  .then(response => response.json())
  .then(data =>  setData(data.list[0].main.temp))
  }



useEffect(() => {

  placeData(userInput);

},[userInput]);



  return (
    <div className="App">
     <Input userInput={userInput} setUserInput={setUserInput} />
     {data &&
      <p>La température actuelle à {userInput} est de {data} °C</p>
     }
    </div>
  );
}








export default App;
