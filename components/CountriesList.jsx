import React, { useState } from "react";
import CountryCard from "./CountryCard";
import countriesData from "../countriesData";
import CountriesListShimmer from "./CountriesListShimmer";

const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);

  if (countriesData.length === 0) {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }

  return (
    <>
      {!countriesData.length ? (
        <CountriesListShimmer />
      ) : (
        <section className="flag-card container flex">
          {countriesData
            .filter(
              (country) =>
                country.name.common.toLowerCase().includes(query) ||
                country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital}
                />
              );
            })}
        </section>
      )}
    </>
  );
};

export default CountriesList;
