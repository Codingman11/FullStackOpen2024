import Country,  from "./Country"
import countryService from '../services/countries'
import axios from 'axios'
import { useEffect, useState } from "react"



const Countries = ({ countries, selectedCountry, setSelectedCountry }) => {
    // const handleButtonClick = (country) => {
    //     setData('')

    return (
        <div>
            {countries.length === 1 ? (

                <DisplayCountry country={countries[0]} />

            ) : (
                countries.map(country =>
                    <Country key={country.cca3} country={country} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                )
            )}
            {selectedCountry}
        </div>
    )




}

export default Countries