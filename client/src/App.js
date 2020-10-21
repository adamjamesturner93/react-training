import React, { useState } from "react";
import "./App.css";
import { Cards, Header, Nav } from "./components";

const App = () => {
  const [total, setTotal] = useState(0);
  return (
    <React.Fragment>
      <Header />
      <Nav total={total} />
      <main>
        <Cards />
      </main>
      <footer>&copy;2020 - Adam Turner</footer>
    </React.Fragment>
  );
};

export default App;
