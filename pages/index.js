import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";
import axios from "axios";
import ItemList from "@/src/components/ItemList";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>HOME | Toy Project</title>
      </Head>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header as="h3">신상품</Header>
        <ItemList list={list} />
        <Divider />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  // production env 에 apiUrl 값이 할당되지 않아 빌드가 안되었다.
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
};
