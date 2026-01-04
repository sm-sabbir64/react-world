import React from 'react';

const Country = ({country}) => {
    // console.log(country);
    
    return (
        <div>
            <img src={country.flags.flags.png} alt="" />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <p>Capital: {country.capital.capital}</p>
        </div>  
    );
};

export default Country;