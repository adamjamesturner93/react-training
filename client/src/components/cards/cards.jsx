import React from "react";
import Card from "./components/card";

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

const Cards = () => {
  return (
    <React.Fragment>
      <h2>CARD COMPONENT!</h2>
      <section>
        {cards.map((card) => (
          <Card item={card} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default Cards;

// 1. Loop through cards array
// 2. Render a component for each one.
// 3. Render title
