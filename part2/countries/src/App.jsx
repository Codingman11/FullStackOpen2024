import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Countries from './components/Countries';


function App() {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)

//   useEffect(() => {
//     const fetchCountries = async () => {
//         try {
//             const response = await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`);
//             const allCountries = response.data;
//             const filteredCountries = allCountries.filter(country =>
//                 country.name.common.toLowerCase().includes(value.toLowerCase())
//             );

//             if (filteredCountries.length > 10) {
//                 setError('Too many matches, please specify another filter.');
//                 setCountries([]);
//             } else if (filteredCountries.length === 1) {
//                 setError('');
//                 setCountries(filteredCountries);
//             } else {
//                 setError('');
//                 setCountries(filteredCountries);
//             }
//         } catch (error) {
//             setError('No matches found.');
//             setCountries([]);
//         }
//     };

//     if (value) {
//         fetchCountries();
//     } else {
//         setCountries([]);
//         setError('');
//     }
// }, [value]);

useEffect(() => {
  if (value) {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(res => {
        const allCountries = res.data
        const filteredCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))

       
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
        
       
        {/* {countries.length === 1 ? (
          
          <Country country={countries[0]} />
        ) : (
          countries.map(country=>
            <Country key={country.cca3} country={country} />
          )
        )} */}
        <Countries countries={countries}/>

      </div>
    </div>
  );
}

export default App;
