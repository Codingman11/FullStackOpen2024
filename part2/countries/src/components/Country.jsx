
const Country = ({country}) => {
    console.log(country.name.common)
    return (
        <div>
           
            <p>{country.name.common}</p>
        </div>
    )
}

export default Country