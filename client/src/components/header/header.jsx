import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e6e6e6;
  padding: 25px;
`;

const Header = () => (
  <HeaderWrapper>
    <h1>Clothes Shop</h1>
  </HeaderWrapper>
);

export default Header;
