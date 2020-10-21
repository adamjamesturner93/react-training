import React, { useState } from "react";
import "./App.css";
import { Cards, Header, Nav } from "./components";

const App = () => {
  const [total, setTotal] = useState(0);

  const addProduct = (price) => {
    setTotal(total + +price);
  };

  return (
    <React.Fragment>
      <Header />
      <Nav total={total} />
      <main>
        <Cards addProduct={addProduct} />
      </main>
      <footer>&copy;2020 - Adam Turner</footer>
    </React.Fragment>
  );
};

export default App;
