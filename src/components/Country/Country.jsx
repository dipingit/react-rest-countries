import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    // console.log(country);
    const {name, flags, population, area} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'red' }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;