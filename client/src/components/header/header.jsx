import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
  padding: 25px;
`;

const Header = () => (
  <HeaderWrapper>
    <NavLink to="/">
      <h1>Clothes Shop</h1>
    </NavLink>
  </HeaderWrapper>
);

export default Header;
