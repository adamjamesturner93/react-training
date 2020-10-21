import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 2px solid #000000;
  background-color: #ffffff;
`;

const BasketButton = styled(Button)`
  border: 2px solid red;
`;

const Nav = ({ total }) => {
  return (
    <nav className="nav">
      <a type="button" href="#">
        <Button>New</Button>
      </a>
      <a href="#">
        <BasketButton>View Basket - £{total}</BasketButton>
      </a>
    </nav>
  );
};

export default Nav;
