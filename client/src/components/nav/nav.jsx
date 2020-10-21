import React, { useState } from "react";
import styled from "styled-components";

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

const Nav = ({ total }) => {
  return (
    <NavWrapper>
      <Button type="button" href="#">
        New
      </Button>
      <span>
        <BasketButton href="#">View Basket</BasketButton> - £{total}
      </span>
    </NavWrapper>
  );
};

export default Nav;
