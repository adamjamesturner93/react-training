import React, { useState } from "react";
import Card from "./components/card";
import styled from "styled-components";

const CardsWrapper = styled.section`
  display: flex;
  flex-wrap: row;
  max-width: 100%;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  text-align: center;
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

const ITEMS = [
  {
    id: "5cf20fa8-07b4-4550-becc-1defebb6178f",
    price: "29.33",
    imageUri: "https://picsum.photos/200/300",
    item: "T-Shirt - White",
    stock: 1,
    category: "female",
  },
  {
    id: "cc5911f1-1d2c-4753-96be-a305fb79dd7f",
    price: "21.05",
    imageUri: "https://picsum.photos/200/300",
    item: "Blouse - Grey",
    stock: 9,
    category: "female",
  },
  {
    id: "9bc1936a-8cac-40f2-99c9-51e12babec63",
    price: "41.84",
    imageUri: "https://picsum.photos/200/300",
    item: "Dress - Yellow",
    stock: 8,
    category: "new",
  },
  {
    id: "d295af21-0c8e-4c21-8255-8cae36af67a1",
    price: "50.97",
    imageUri: "https://picsum.photos/200/300",
    item: "Hat - Purple",
    stock: 9,
    category: "female",
  },
  {
    id: "392f2cf1-8c8c-4f3d-a130-5e461b39dc53",
    price: "82.66",
    imageUri: "https://picsum.photos/200/300",
    item: "Wallet - Leather",
    stock: 9,
    category: "male",
  },
  {
    id: "5819cb08-d0f4-4c98-9876-b0b4f8f8fda2",
    price: "53.11",
    imageUri: "https://picsum.photos/200/300",
    item: "Shirt - Pink",
    stock: 8,
    category: "male",
  },
  {
    id: "7fd61a43-184f-4556-a5d3-052f56e14579",
    price: "52.89",
    imageUri: "https://picsum.photos/200/300",
    item: "Jumper - Purple",
    stock: 10,
    category: "male",
  },
  {
    id: "aa5c869b-1d2e-4d33-96be-426cd411492d",
    price: "80.64",
    imageUri: "https://picsum.photos/200/300",
    item: "Socks - Black",
    stock: 8,
    category: "female",
  },
  {
    id: "a1674410-0326-4844-81b0-45bb735e5aa4",
    price: "20.01",
    imageUri: "https://picsum.photos/200/300",
    item: "Gloves - Black",
    stock: 0,
    category: "new",
  },
  {
    id: "e229c059-d718-4f28-b3fe-565da0b20a9d",
    price: "71.56",
    imageUri: "https://picsum.photos/200/300",
    item: "Jumper - Wool",
    stock: 0,
    category: "male",
  },
  {
    id: "459064b4-59ff-4639-99b6-3637072040a3",
    price: "53.23",
    imageUri: "https://picsum.photos/200/300",
    item: "Tie - Christmas Special",
    stock: 9,
    category: "male",
  },
  {
    id: "5f258fa8-4101-4764-9e54-7c11bff88c2d",
    price: "95.72",
    imageUri: "https://picsum.photos/200/300",
    item: "Socks - White",
    stock: 4,
    category: "new",
  },
  {
    id: "3ac846da-4ecc-412a-9456-9cee9ed275da",
    price: "89.88",
    imageUri: "https://picsum.photos/200/300",
    item: "Hat - Christmas Special",
    stock: 3,
    category: "new",
  },
  {
    id: "36044077-d6ce-4ed3-a36d-a414a805a262",
    price: "67.39",
    imageUri: "https://picsum.photos/200/300",
    item: "Trunks - Halloween Special",
    stock: 3,
    category: "male",
  },
  {
    id: "c27558bc-c91c-428e-b3c0-6a07bc94f8a2",
    price: "92.70",
    imageUri: "https://picsum.photos/200/300",
    item: "Sports Jacket - Grey",
    stock: 3,
    category: "male",
  },
  {
    id: "44352e90-0b82-49a0-a32c-c4955f06f1d9",
    price: "56.76",
    imageUri: "https://picsum.photos/200/300",
    item: "Skirt - Red",
    stock: 10,
    category: "female",
  },
  {
    id: "a1b054c8-4946-48b3-9cb9-6993db002539",
    price: "73.03",
    imageUri: "https://picsum.photos/200/300",
    item: "Tights - Snowman",
    stock: 3,
    category: "female",
  },
  {
    id: "41690837-9ada-469a-8f59-00135b303a81",
    price: "54.37",
    imageUri: "https://picsum.photos/200/300",
    item: "Jumper - Pumpkin",
    stock: 2,
    category: "new",
  },
  {
    id: "09635386-8a6e-4883-8d33-d248bcbd2e7f",
    price: "34.95",
    imageUri: "https://picsum.photos/200/300",
    item: "Dress - Yellow",
    stock: 10,
    category: "female",
  },
  {
    id: "ef06f8a8-dce5-4629-a63d-0fd0a26beb41",
    price: "51.02",
    imageUri: "https://picsum.photos/200/300",
    item: "Boots - Faux Leather",
    stock: 4,
    category: "female",
  },
  {
    id: "a5a28255-ef22-4253-b6b3-00602931d8cf",
    price: "53.54",
    imageUri: "https://picsum.photos/200/300",
    item: "Beanie - Red",
    stock: 2,
    category: "new",
  },
  {
    id: "a9f83c2d-69e8-4a39-a9a0-ee51cb9c3738",
    price: "95.81",
    imageUri: "https://picsum.photos/200/300",
    item: "Hat - Orange",
    stock: 0,
    category: "new",
  },
  {
    id: "6883140a-f033-44e4-9bdb-629b4bec1716",
    price: "69.98",
    imageUri: "https://picsum.photos/200/300",
    item: "Boots - Leather",
    stock: 2,
    category: "new",
  },
  {
    id: "bdf6b106-3484-4530-93ab-0b78e1defe04",
    price: "89.07",
    imageUri: "https://picsum.photos/200/300",
    item: "Scarf - Halloween Special",
    stock: 4,
    category: "new",
  },
  {
    id: "5e09393a-da0c-426e-81fc-ead780a2f8d3",
    price: "38.81",
    imageUri: "https://picsum.photos/200/300",
    item: "Socks - Mixed",
    stock: 3,
    category: "male",
  },
  {
    id: "fd304709-7427-4208-9a13-ff78eb4dfb5a",
    price: "53.08",
    imageUri: "https://picsum.photos/200/300",
    item: "T-Shirt - Penguin",
    stock: 7,
    category: "male",
  },
  {
    id: "03d29876-d681-4474-9d88-dc5f261d1174",
    price: "52.89",
    imageUri: "https://picsum.photos/200/300",
    item: "T-Shirt - Green",
    stock: 2,
    category: "female",
  },
  {
    id: "fd7b5526-a708-4001-b80f-f4562ba9b659",
    price: "38.54",
    imageUri: "https://picsum.photos/200/300",
    item: "Jeans - Blue",
    stock: 9,
    category: "male",
  },
  {
    id: "2922994b-0a31-4d58-b64f-483895e80fca",
    price: "31.02",
    imageUri: "https://picsum.photos/200/300",
    item: "Jeans - Faded Blue",
    stock: 1,
    category: "female",
  },
  {
    id: "83398329-c7ae-4c5f-835d-28a44e7be537",
    price: "73.29",
    imageUri: "https://picsum.photos/200/300",
    item: "Winter Coat - Green",
    stock: 5,
    category: "new",
  },
];
