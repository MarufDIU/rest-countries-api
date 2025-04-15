import React, { useContext, useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router";
import CountriesDetailsShimmer from "./CountriesDetailsShimmer";
import { ThemeContext } from "../contexts/ThemeContext";

const CountriesDetail = () => {
    const [isDark] = useContext(ThemeContext)
  const params = useParams();
  // console.log(params);

  const location = useLocation()
  console.log(location)
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        setCountryData({
          flag: data.flags.svg,
          name: data.name.common || data.name,
          nativeName: Object.values(data.name.nativeName || {})[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subRegion: data.subregion,
          capital: data.capital.join(", "),
          domain: data.tld.join(", "),
          currencies: Object.values(data.currencies || {})
            .map((currencies) => currencies.name)
            .join(", "),
          languages: Object.values(data.languages || {}).join(", "),
          borders: [],
        });

        if (!data.borders) {
          data.borders = [];
        }

        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderCountry]) => borderCountry.name.common);
          })
        ).then((borders) => {
          setCountryData((prev) => ({ ...prev, borders }));
        });
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });

    return () => {};
  }, [countryName]);

  if (notFound) {
    return (
      <div>
        <a className="btn" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp; Back
        </a>
        <div style={{ textAlign: "center" }}>Country Not Found</div>
      </div>
    );
  }
  return !countryData ? (
    <CountriesDetailsShimmer />
  ) : (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="main-content container flex">
        <a className="btn" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp; Back
        </a>
        <div className="country-details flex">
          <img src={countryData.flag} alt={countryData.name} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name:</b>{" "}
                <span className="native-name">{countryData.nativeName || countryData.name}</span>
              </p>
              <p className="country-population">
                <b>Population:</b>{" "}
                <span className="population">{countryData.population}</span>
              </p>
              <p className="country-region">
                <b>Region:</b>{" "}
                <span className="region">{countryData.region}</span>
              </p>
              <p className="country-subregion">
                <b>Sub Region:</b>{" "}
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p className="country-capital">
                <b>Capital:</b>{" "}
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain:</b>{" "}
                <span className="domain">{countryData.domain}</span>
              </p>
              <p>
                <b>Currencies:</b>{" "}
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>languages:</b>{" "}
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries:</b>
              {(countryData.borders || []).map((border) => (
                <Link key={border} to={`/${border}`}>
                  {border}
                </Link>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountriesDetail;
