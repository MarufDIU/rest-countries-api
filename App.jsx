import Header from "./components/Header";
import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import {ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
  );
};

export default App;
