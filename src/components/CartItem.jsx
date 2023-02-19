import React from "react";
import styles from "../../styles/CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartCard}>
      <img className={styles.imgCard} src={item.img} alt={item.name} />
      <div className={styles.productInfo}>
        <p className={styles.productName}>{item.name}</p>
        <p className={styles.description}>{item.description}</p>
        <span className={styles.price}>{item.price}$</span>
      </div>
    </div>
  );
};

export default CartItem;
