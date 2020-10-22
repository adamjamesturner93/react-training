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
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    setTotal(total + +item.price);

    const newCart = [...cart];

    if (newCart.find((i) => i.id === item.id)) {
      newCart.find((i) => i.id === item.id).quantity++;
    } else {
      newCart.push({
        ...item,
        quantity: 1,
      });
    }

    setCart(newCart);
    console.table({ newCart });
  };

  return (
    <React.Fragment>
      <Header />
      <Nav total={total} cart={cart} />
      <MainWrapper>
        <Cards addProduct={addProduct} />
      </MainWrapper>
      <FooterWrapper>&copy;2020 - Adam Turner</FooterWrapper>
    </React.Fragment>
  );
};

export default App;
