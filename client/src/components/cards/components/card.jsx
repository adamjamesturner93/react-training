import React from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 10px;

  &:hover {
    box-shadow: 4px 8px 4px #000000;
  }
`;

const Card = ({ item: { image, title, price } }) => {
  return (
    <CardWrapper>
      <img src={image} />
      {title} - &pound;{price}
    </CardWrapper>
  );
};

export default Card;
