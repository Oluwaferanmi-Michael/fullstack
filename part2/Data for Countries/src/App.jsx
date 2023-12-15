import { useEffect, useState } from 'react'
import countryServices from './services/countryServices'
import fetchWeather from './services/fetchWeather'
import CountryDetails from './components/CountryDetails'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [country, setCountry] = useState([])
  const [weather, setWeather] = useState({})
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    console.log('effect')
    countryServices.getAllCountries()
    .then(response => setCountry(response))
  }, [])
  

  const handleChange = (event) => {
    const updatedSearchValue = event.target.value
    setSearchValue(updatedSearchValue)
    console.log('search value:', searchValue)
    return setCountry(country.filter(c => c.name.common.toLowerCase().includes(searchValue.toLowerCase()))
    )
  }

  const getCountryData = async (countryName, lat, long) => {
    const response = await countryServices.getCountryByName(countryName)
    const weatherForCountry =  await fetchWeather.getWeatherForCountry(lat, long)
    console.log(response)

    setCountry([].concat(response))
    setLanguages([].concat(response.languages))
    console.log('weather response:', weatherForCountry)
    setWeather(weatherForCountry)
  }

  const countries = country.length
  

  return (
    <>
      <div>
        Find Countries <input onChange={handleChange} ></input>
      </div>
      <br></br>
      {
      country.map((c, index) => {
        
        if(countries > 10 ){
          return <p key={index}>Too many matches specify another filter</p>
        } else if(countries > 1 && countries <= 10){
          // Countries
          return (
          <div key={index}>
            {c.name.common} <button onClick={() => getCountryData(c.name.common, c.latlng[0], c.latlng[1])}>show</button>
          </div>)
        }
          else if (countries == 1) {
        return <CountryDetails index={index} country={c} weather={weather}></CountryDetails>}
      })}
    </>
  )
}

export default App
