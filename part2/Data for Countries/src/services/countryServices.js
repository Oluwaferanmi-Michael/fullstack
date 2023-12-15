import axios from 'axios'

const getCountriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountryByNameUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name'


const getAllCountries = () => axios.get(getCountriesUrl).then(response => response.data)

const getCountryByName = (name) => axios.get(`${getCountryByNameUrl}/${name}`).then(response => response.data)

export default {getAllCountries, getCountryByName}
