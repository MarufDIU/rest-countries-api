import CountriesList from "./CountriesList";
import React, { useContext, useEffect } from "react";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <section className="filter-section container flex">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </section>
      <CountriesList query={query} />
    </main>
  );
};

export default Home;
