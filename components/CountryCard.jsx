import React from "react";
import { Link } from "react-router";

const CountryCard = ({name, flag, population, region, capital}) => {
  return (
    <Link className="card" to= {`/${name}`} state={{name, flag, population, region, capital}}>
      <div className="card-header">
        <img
          className="country-img"
          src={flag}
          alt={name}
        />
      </div>
      <div className="card-content flex">
        <h3 className="country-name">{name}</h3>
        <p className="country-population">
          <b>Population:</b> {population}
        </p>
        <p className="country-region">
          <b>Region:</b> {region}
        </p>
        <p className="country-capital">
          <b>Capital:</b> {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
