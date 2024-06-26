const DisplayCountry = ({ country}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        countryService
            .getCountry(country.name.common)
            .then(returnedCountry => {
                setData(returnedCountry)
                setLoading(false)
            })
            .catch(err => {
                console.log("error: ", err)
                setLoading(false)
            })
    }, [country.name.common])

    
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
                <div>
                    <img src={data.flags.png} alt={`Flag of ${data.name.common}`} width="100" />
                </div>
            </div>

        </div>
    )
}