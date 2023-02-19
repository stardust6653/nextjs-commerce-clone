import React from "react";
import CartItem from "./CartItem";
import styles from "../../styles/CartItem.module.css";

const CartItemList = ({ list }) => {
  return (
    <>
      {list ? (
        list.map(item => <CartItem item={item} />)
      ) : (
        <div className={styles.empty}>위시리스트가 비었어요!</div>
      )}
    </>
  );
};

export default CartItemList;
