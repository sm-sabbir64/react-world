import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries}) => {
  // console.log(country.area.area);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    //second system
    // setVisited(visited ? false : true );

    //3rd system
    setVisited(!visited)
    handleVisitedCountries(country)
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt="" />
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>
        Area: {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "No-visited"}
      </button>
      <button>Add visited flag</button>
    </div>
  );
};

export default Country;