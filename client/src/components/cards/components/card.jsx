import React from "react";
import styled from "styled-components";

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px;
  align-items: center;
  justify-content: flex-end;
`;

const Details = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const Card = ({ item: { imageUri, item, price, stock }, addProduct }) => {
  const cta =
    stock > 0 ? (
      <button onClick={addProduct}>Buy Now!!</button>
    ) : (
      <button>Out of stock!</button>
    );

  return (
    <CardWrapper>
      <img src={imageUri} />
      <Details>
        {item} - &pound;{price}
        {cta}
      </Details>
    </CardWrapper>
  );
};

export default Card;
