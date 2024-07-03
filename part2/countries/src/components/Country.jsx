import { useState} from "react"

const Country = ({ country }) => {

    const [selectedState, setSelectedState] = useState(false)

    const handleClick = () => {
        console.log("clicked")
        setSelectedState(!selectedState)
    }
    return (
        <div>
            {country.name.common}
            <button onClick={handleClick}>{selectedState ? 'Hide' : 'Show'}</button>

            {selectedState && (
                <div>
                    <div>
                        <h1>{country.name.common}</h1>
                        <p>capital {country.capital}</p>
                        <p>area {country.area}</p>
                    </div>
                    <div>
                        <h4>languages</h4>
                        <ul>
                            {Object.entries(country.languages).map(([code, language]) => (
                                <li key={code}>{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
                    </div>
                </div>
            ) }
        </div>
        
    )
}

export default Country