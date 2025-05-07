import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ foods }) => {
  return (
    <div>
      {foods.map((food) => {
        return <MenuItem key={food.id} {...food} />;
      })}
    </div>
  );
};

export default MenuList;
