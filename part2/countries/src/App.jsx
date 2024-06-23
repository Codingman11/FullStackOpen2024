import { useEffect, useState } from 'react'
import countriesService from './services/countries'
import Country from './components/Country'
function App() {
  const [value, setValue] = useState('')
  const [country, setCountry] = useState(null)
  const [countries, setCountries] = useState([])
  const [error, setError] = useState('')
  const handleName = (event) => {
    setValue(event.target.value)
  }
  const onSearch = (event) => {
    event.preventDefault()
    setCountry(event.target.value)

  }
  useEffect(() => {

    console.log("Country")
    if (country) {
      countriesService
      .getCountries(value)
      .then(returnedCountries => {
        if (returnedCountries.length > 10) {
          console.log("Too many")
        } else {
          setCountries(returnedCountries)

        }
                
      })
    }
  
    // if (country) {
    //   console.log("Country")
    //   countriesService
    //   .getAll()
    //   .then(returnedCountry => {
    //     console.log(returnedCountry)
    //     setCountries(returnedCountry)
    //   } )
    // }
  }, [value])
  return (
    <>

      <div>
        find countires: <input value={value} onChange={handleName} />
      </div>
      <div>
        {countries.map(country => 
          <Country country={country} />
        )}
      </div>
    </>
  )
}

export default App
