import React, { useState } from "react";
import "./App.css";
import { Cards, Header, Nav } from "./components";
import styled from "styled-components";

const MainWrapper = styled.main`
  flex-grow: 1;
`;

const FooterWrapper = styled.footer`
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
`;

const App = () => {
  const [total, setTotal] = useState(0);

  const addProduct = (price) => {
    setTotal(total + +price);
  };

  return (
    <React.Fragment>
      <Header />
      <Nav total={total} />
      <MainWrapper>
        <Cards addProduct={addProduct} />
      </MainWrapper>
      <FooterWrapper>&copy;2020 - Adam Turner</FooterWrapper>
    </React.Fragment>
  );
};

export default App;
