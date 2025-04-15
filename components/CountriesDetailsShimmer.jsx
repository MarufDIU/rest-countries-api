import React from "react";
import "./CountriesDetailsShimmer.css";
import { useOutletContext } from "react-router";

const CountriesDetailsShimmer = () => {
  return (
    <div className="main-content container flex">
      <div className="button"></div>
      <div className="country-details flex">
        <div className="img-content"></div>
        <div className="details-container"></div>
      </div>
    </div>
  );
};

export default CountriesDetailsShimmer;
