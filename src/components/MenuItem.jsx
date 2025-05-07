import React from "react";
import ItemBody from "./ItemBody";
import ItemImage from "./ItemImage";

const MenuItem = ({ name, desc, price, imageUrl }) => {
  return (
    <>
      <ItemImage imageUrl={imageUrl} />
      <ItemBody name={name} desc={desc} price={price} />
    </>
  );
};

export default MenuItem;
