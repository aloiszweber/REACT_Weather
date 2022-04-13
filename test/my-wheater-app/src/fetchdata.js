
const {REACT_APP_API_KEY2} = process.env;

const fetchData = async (userInput) => {
    
    var response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${REACT_APP_API_KEY2}`)
    var data = await response.json();
    console.log(data)
    return data;
}

export default fetchData