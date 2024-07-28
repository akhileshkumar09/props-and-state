import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    const apiKey = 'ef0bcca0a0a8ba4442e4aa7530535c86'

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    // }
    const handleCity = (e)=>{
        setCity(e.target.value)
    }


    useEffect(()=>{
     const fetchWeatherData = async ()=>{
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=chandauli&appid=${apiKey}&units=metric`)
            if(!response.ok){
                throw new Error('Failed to fetch weather data')
            }
            const data = response.json();
            setWeatherData(data);
            setLoading(false);

        }catch(error){
            setError(error.message)
            setLoading(false);
        }
        
     }
     fetchWeatherData();
    },[])
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        console.log(error)
        return <p>Error...</p>
    }

  return (
    <div className='weather'>
    <form >
        <input type='text' 
        placeholder='Enter City Name' 
        value={city}
        onChange={handleCity}    
        />
        <button type='submit'>Search</button>
    </form>
    <div className='weatherDetail'>
        <h2>Weather Detail</h2>
    </div>
    <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Condition: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  )
}

export default Weather

// weatherApiKey = 'ef0bcca0a0a8ba4442e4aa7530535c86'

// https://api.openweathermap.org/data/2.5/weather?q=chandauli&appid=$ef0bcca0a0a8ba4442e4aa7530535c86&units=metric`