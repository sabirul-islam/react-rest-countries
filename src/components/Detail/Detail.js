import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Detail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    console.log(country);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res=>res.json())
        .then(data=>setCountry(data[0]))
    },[countryName])
    const {name, capital, population, region, flag} = country;
    return (
    <div>
    <h1 className='text-center mb-5 mt-3'>Welcome To {countryName}</h1>
    
        <Card className='mx-auto' style={{ width: '18rem' }}>
        <Card.Img style={{height: '150px'}} variant="top" src={flag} />
        <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>
        Capital: {capital}
        </Card.Text>
        <Card.Text>
        Population: {population}
        </Card.Text>
        <Card.Text>
        Region: {region}
        </Card.Text>
        <Card.Text>
        {country.name && <h3>Native Name: {country.languages[0].nativeName}</h3>}
        </Card.Text>
        </Card.Body>
        </Card>

    )
    

            

            

        </div>
    );
};

export default Detail;