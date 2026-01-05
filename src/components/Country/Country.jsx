import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  // console.log(country.area.area);  

  const handleVisited = () => {
    console.log("buttn clicked");
  };

  return (
    <div className="country">
      <img src={country.flags.flags.png} alt="" />
      <h2>Name: {country.name.common}</h2>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>
        Area: {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>NO Visit</button>
    </div>
  );
};

export default Country;
