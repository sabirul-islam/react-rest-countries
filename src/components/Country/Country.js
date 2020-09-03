import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Country = (props) => {

    const {name, capital, population, region, flag} = props.country;
    return (
      
      <Card className='m-2 d-md-inline-flex' style={{ width: '18rem' }}>
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
      <Link to={`/detail/${name}`}><Button variant="primary">Go To {name}</Button></Link>
      </Card.Body>
      </Card>
            
    );
};

export default Country;