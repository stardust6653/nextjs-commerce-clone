import Head from "next/head";
import React from "react";
import { Header } from "semantic-ui-react";
import CartItemList from "@/src/components/CartItemList";

const Cart = () => {
  // next js 에서 로컬 혹은 세션 스토리지를 사용할 시에 SSR의 방식이기 때문에 window 객체가 있는 지 없는지를 파악하는 예외처리가 필수
  const data = typeof window !== "undefined" ? JSON.parse(sessionStorage.getItem("item")) : null;

  return (
    <>
      <Head>
        <title>위시리스트 | Toy Project</title>
      </Head>
      <Header as="h3">위시리스트</Header>
      <CartItemList list={data} />
    </>
  );
};

export default Cart;
