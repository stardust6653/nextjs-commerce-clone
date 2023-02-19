import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Detail.module.css";

export const getServerSideProps = async context => {
  const id = context.query.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
};

const Detail = ({ item }) => {
  console.log(item);

  const productInfoArr = {
    name: item.name,
    img: item.image_link,
    price: item.price,
    description: item.description,
    productLink: item.product_link,
  };

  const addCart = () => {
    if (sessionStorage.length === 0) {
      sessionStorage.setItem("item", JSON.stringify([productInfoArr]));
    } else {
      sessionStorage.setItem(
        "item",
        JSON.stringify([...JSON.parse(sessionStorage.item), productInfoArr])
      );
    }
  };

  return (
    <>
      <Head>
        <title>{item.name} | Toy Project</title>
      </Head>

      <div className={styles.detailCard}>
        <img src={item.image_link} alt={item.name} className={styles.img} />
        <div className={styles.detailInfo}>
          <h4 className={styles.productName}>{item.name}</h4>
          <div className={styles.typeAndPriceGroup}>
            <span className={styles.type}>{item.product_type}</span>
            <span className={styles.price}>{item.price}$</span>
          </div>
          <p className={styles.info}>{item.description}</p>
          <div className={styles.btnGroup}>
            <Link href={`${item.product_link}`} passHref>
              <button className={styles.buyBtn}>Buy now</button>
            </Link>
            <button className={styles.cartBtn} onClick={addCart}>
              Add wish-list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
