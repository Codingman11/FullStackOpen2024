import { useState } from "react"

const Country = ({country, SelectedCountry, setSelectedCountry}) => {
    
    const handleButtonClick = (country) => {
        setSelectedCountry(country)
    }
   

    return (
        <div>
            {country.name.common}
            <button onClick={() => {handleButtonClick(country)}}>Show</button>
        </div>
        
    )
}

export default Country