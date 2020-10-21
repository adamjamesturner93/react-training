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

const Card = ({ item: { image, title, price }, addProduct }) => {
  return (
    <CardWrapper>
      <img src={image} />
      <Details>
        {title} - &pound;{price}
        <button onClick={() => addProduct(price)}>Buy Now!!</button>
      </Details>
    </CardWrapper>
  );
};

export default Card;
