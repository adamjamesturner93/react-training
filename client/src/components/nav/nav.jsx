import React, { useState } from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Button = styled.a`
  text-decoration: none;
  color: black;
  transition: 0.2s all ease-in;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const BasketButton = styled(Button)`
  color: darkblue;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
`;

const Nav = ({ total, cart }) => {
  const basketTotal = cart.length > 0 && `- ${cart.length} items (£${total.toFixed(2)})`
  return (
    <NavWrapper>
      <Button type="button" href="#">
        Shop Now
      </Button>
      <span>
        <NavLink to="/basket">
          <BasketButton href="#">View Basket</BasketButton> {basketTotal}
        </NavLink>
      </span>
    </NavWrapper>
  );
};

export default Nav;
