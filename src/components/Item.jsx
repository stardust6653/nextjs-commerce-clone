import Link from "next/link";
import React from "react";
import styles from "../../styles/Item.module.css";

const Item = ({ item }) => {
  return (
    <Link className={styles.itemCard} href="/detail/[id]" as={`/detail/${item.id}`}>
      <img src={item.image_link} alt={item.name} />
      <h4 className={styles.itemName}>{item.name}</h4>
      <span className={styles.type}>{item.product_type}</span>
      <span className={styles.price}>{item.price}$</span>
    </Link>
  );
};

export default Item;
