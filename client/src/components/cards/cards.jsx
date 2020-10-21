import React from "react";
import Card from "./components/card";
import styled from "styled-components";

const cards = [
  {
    id: 0,
    title: "Jumper",
    price: "24.50",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 1,
    title: "T-Shirt",
    price: "12.50",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Jeans",
    price: "19.98",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Hat",
    price: "9.50",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Gloves",
    price: "9.99",
    image: "https://picsum.photos/200/300",
  },
];

const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: row;
  max-width: 100%;
  flex-wrap: wrap;
`;

const Cards = ({ addProduct }) => {
  return (
    <React.Fragment>
      <h2>CARD COMPONENT!</h2>
      <CardsWrapper>
        {cards.map((card) => (
          <Card item={card} addProduct={addProduct} />
        ))}
      </CardsWrapper>
    </React.Fragment>
  );
};

export default Cards;

// 1. Add button to Card Component
// 2. Add product price to view basket section.
