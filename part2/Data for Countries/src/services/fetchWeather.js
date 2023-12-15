import axios from 'axios'


const apiKey = import.meta.env.VITE_API_KEY

const getWeatherForCountry = (lat, long,) => axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${apiKey}`
    ).then(response => response.data)



export default {getWeatherForCountry}