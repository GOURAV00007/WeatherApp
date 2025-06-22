import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_key = "4cd008e3697f6c0d7ba979f438af58cf";


    let getWeatherInfo = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
        let JsonResponse = await response.json();
        console.log(JsonResponse);
        let result = {
            city:city,
            temp: JsonResponse.main.temp,
            tempMin:JsonResponse.main.temp_min,
            tempMax:JsonResponse.main.temp_max,
            humidity:JsonResponse.main.humidity,
            feelsLike:JsonResponse.main.feels_like,
            weather:JsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }
        catch(err)
        {
            setError("No Such Place In Our API");
        }
    }


    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
    return(
        <div className='SearchBox'>
            {/* <h3>Search</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
        </div>
    )
}