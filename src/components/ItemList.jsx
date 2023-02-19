import React from "react";
import Item from "./Item";

const ItemList = ({ list }) => {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {list.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
