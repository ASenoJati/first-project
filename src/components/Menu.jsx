import React from "react";
import { dataList } from "../utils/data";
import MenuList from "./MenuList";

const Menu = () => {
  const foods = dataList();

  return (
    <div>
      <h1>Daftar Menu</h1>
      <MenuList foods={foods} />
    </div>
  );
};

export default Menu;
