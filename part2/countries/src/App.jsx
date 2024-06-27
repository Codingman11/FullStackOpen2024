import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Countries from './components/Countries';
import countryService from './services/countries'

const App = () => {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)


  useEffect(() => {
    if (value) {
      countryService
        .getAll()
        .then(returnedCountries => {
          const filteredCountries = returnedCountries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
          if (filteredCountries.length >= 10) {
            setError('Too many matches, please speficy another filter')
            setCountries([])
          } else if (filteredCountries.length === 1) {
            setError('')
            setCountries(filteredCountries)
          } else {
            setError('')
            setCountries(filteredCountries)
          }
        })
        .catch(err => {
          setError(`No matches found ${err}`)
          setCountries([])
        })
    } else {
      setCountries([])
      setError('')
    }
  }, [value])

  const handleSearch = (event) => {
    setValue(event.target.value)
  }



  return (
    <div>
      <div>
        find countries: <input value={value} onChange={handleSearch} />
      </div>
      {error && <p>{error}</p>}
      <div>
        <Countries countries={countries}/>
       
      </div>
    </div>
  );
}

export default App;
