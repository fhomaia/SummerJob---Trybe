try{
    const fetchCountries = async () => {
        const getCountries = await fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => response.json())
  
        return getCountries.map((country) => country.name);
    } 
} catch {
    return ' A API falhou :( '
  }
fetchCountries()
