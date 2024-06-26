import Country from "./Country"
import countryService from '../services/countries'
import axios from 'axios'
import { useEffect, useState } from "react"

const DisplayCountry = ({ country }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [country, setCountry] = useState([]);

    useEffect(() => {
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country.name.common}`)
            .then(res => {

                setData(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.error("Error", err);
                setLoading(false)
            })
    }, [country.name.common])

    /**
     * capital, area, flag, language
     */
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
        </div>
    )
}

const DisplayCou = ({country, onShow}) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <button onClick={onShow}>Show</button>
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