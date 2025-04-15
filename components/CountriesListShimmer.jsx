import React from "react";
import "./CountriesListShimmer.css";

const CountriesListShimmer = () => {
  return (
    <div className="flag-card container flex">
      {Array.from({ length: 10 }).map((e, i) => {
        return <div key={i} className="card shimmer-card">
          <div className="flag-container"></div>
          <div className="card-text">
            <h3 className="card-title"></h3>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default CountriesListShimmer;
