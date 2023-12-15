

const CountryDetails = ({country, weather, index}) => {
    console.log('Rendering Country Details')
    return (
        <div key={index}>
            <h1> 
              {country.name.common}
            </h1>
            <p key={country.capital.length}>capital: {country.capital[0]}</p>
            <p>area: {country.area}</p>

            <b>languages</b>
            <br></br>
            <ul>
              {Object.values(country.languages).map(l => <li>{l}</li>)}
            </ul>

            <img alt={country.flags.alt} src={country.flags.png}></img>
            
            <br></br>
            
            {/* Weather Details */}
            <h1>Weather in {country.capial}</h1>
            <br></br>
            <b>temperature: {weather.current.temp} c</b>
            <br></br>
            <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}></img>
            <br></br>
            <b>wind_speed: {weather.current.wind_speed} m/s</b>

          </div>
    )
}

export default CountryDetails