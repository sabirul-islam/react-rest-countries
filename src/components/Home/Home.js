import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setcountries] = useState([]);
    useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setcountries(data))
  },[])
    return (
        <div>
        <h1 className= 'mb-4 text-primary text-center'>Total Countries: {countries.length}</h1>
        {
            countries.map(country=><Country country={country} key={country.numericCode}></Country>)
        }
        </div>
    );
};

export default Home;