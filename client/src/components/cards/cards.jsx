import React, { useState, useEffect } from "react";
import Card from "./components/card";
import styled from "styled-components";

const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: row;
  max-width: 100%;
  flex-wrap: wrap;
`;

const Cards = ({ addProduct }) => {
  const [category, setCategory] = useState("new");
  const [items, setItems] = useState(ITEMS);

  const onAddProduct = (item) => {
    const newItems = items;

    if (newItems.find((i) => i.id === item.id).stock > 0) {
      newItems.find((i) => i.id === item.id).stock--;
    }

    setItems(newItems);
    addProduct(item);
  };

  const visibleItems = items.filter((i) => i.category === category);

  return (
    <React.Fragment>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="new">New</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <CardsWrapper>
        {visibleItems.map((item) => (
          <Card
            key={item.id}
            item={item}
            addProduct={() => onAddProduct(item)}
          />
        ))}
      </CardsWrapper>
    </React.Fragment>
  );
};

export default Cards;
