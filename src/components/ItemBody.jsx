import React from "react";

const ItemBody = ({ name, desc, price }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{desc}</p>
    </>
  );
};

export default ItemBody;
