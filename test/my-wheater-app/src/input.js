
import {useRef} from "react";




function Input ({okok, setOkok}) {
//https://api.unsplash.com/search/photos/?client_id=nmK8gxg5k5lBAIK5LlvJqIxzcN54f8UJxUd69GEx9fU&query=rome
   // fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_API_KEY}&query=liege`)
   // .then(response => response.json())
   // .then(response2 => console.log(response2.results))
    const fetchData = ()=>{
        fetch(`api.openweathermap.org/data/2.5/forecast?q=${okok}&appid=20e512e64ca116358bfe79d694991254`)
        .then(response =>{
            console.log(response)
            response.json()
        })    
    }


    const inputRef = useRef();


    function cliclick () {
        const inputElement = inputRef.current;
        setOkok(inputElement.value);
        fetchData()
    }


    return <div id="entrybox">
                <input ref={inputRef} type="text" />
                <button onClick={cliclick}> Submit </button>
            </div>

}




export default Input