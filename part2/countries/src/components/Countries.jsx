import Country from "./Country"
import countryService from '../services/countries'
import axios from 'axios'
import { useEffect, useState } from "react"

const DisplayCountry = ({ country }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState(null)
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    //const [country, setCountry] = useState([]);
    const api_key = import.meta.env.VITE_WEATHER_API_KEY

    useEffect(() => {
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country.name.common}`)
            .then(res => {

                setData(res.data);
                const latitude = res.data.capitalInfo.latlng[0]
                const longitude = res.data.capitalInfo.latlng[1]
                setLat(latitude)
                setLon(longitude)

            })
            .catch(err => {
                console.error("Error", err);
                setLoading(false)
            })

    }, [country.name.common])

    // [lat, lon] = data.capitalInfo.latlng
    // console.log(lat, lon)
    useEffect(() => {
        if (lat !== null && lon !== null) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
                .then(res => {
                    setWeather(res.data)
                    setLoading(false)

                })
                .catch(err => {
                    console.log(err)
                })
        }


    }, [lat, lon, api_key])

 
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <div>
                <h1>{data.name.common}</h1>
                <p>capital {data.capital}</p>
                <p>area {data.area}</p>
            </div>
            <div>
                <h4>languages</h4>
                <ul>
                    {Object.entries(data.languages).map(([code, language]) => (
                        <li key={code}>{language}</li>
                    ))}
                </ul>
            </div>
            <div>
                <img src={data.flags.png} alt={`Flag of ${data.name.common}`} width="100" />
            </div>
            <div>
                temparature {weather.main.temp} Celcius
            </div>
            <div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width="100" />
            </div>
            <div>
                wind {weather.wind.speed} m/s
            </div>
        </div>
    )
}


const Countries = ({ countries }) => {
    // const handleButtonClick = (country) => {
    //     setData('')
    // }
    return (
        <div>
            {countries.length === 1 ? (

                <DisplayCountry country={countries[0]} />
            ) : (
                countries.map(country =>
                    <Country key={country.cca3} country={country} />

                )

            )}



        </div>
    )




}

export default Countries