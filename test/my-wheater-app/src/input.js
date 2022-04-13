
import {useRef} from "react";
import {useState} from "react";
import FetchData from './fetchdata';


function Input ({userInput, setUserInput}) {
    

    const inputRef = useRef();

    function cliclick () {
        const inputElement = inputRef.current;
        setUserInput(inputElement.value);

    }

    return <div id="entrybox">
                <input ref={inputRef} type="text" />
                <button onClick={cliclick}> Submit </button>
            </div>

}


//https://api.unsplash.com/search/photos/?client_id=nmK8gxg5k5lBAIK5LlvJqIxzcN54f8UJxUd69GEx9fU&query=rome
  //  fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_KEY}&query=${okok}`)
  //  .then(response => response.json())
  //  .then(response2 => console.log(response2.results))


export default Input