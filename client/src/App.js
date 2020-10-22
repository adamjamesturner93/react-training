import React, { useState } from "react";
import "./App.css";
import { Cards, Header, Nav, Basket } from "./components";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route exact path="/" component={Cards}>
          <Cards addProduct={addProduct} />
        </Route>
        <Route exact path="/basket" component={Basket} />
      </Switch>
      </MainWrapper>
      <FooterWrapper>&copy;2020 - Adam Turner</FooterWrapper>
    </React.Fragment>
  );
};

export default App;
