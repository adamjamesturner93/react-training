import React from "react";

const Card = ({ item: { image, title, price } }) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "10px",
      }}
    >
      <img src={image} />
      {title} - &pound;{price}
    </article>
  );
};

export default Card;
