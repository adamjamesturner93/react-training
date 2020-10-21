import React from "react";
import "./App.css";
import { Cards, Header, Nav } from "./components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <main>
        <Cards />
      </main>
      <footer>&copy;2020 - Adam Turner</footer>
    </React.Fragment>
  );
}

export default App;

// Exercise
// Header component - TITLE ✅
// Nav component - Button, `basket: £0` ✅
// Card Container component ✅
