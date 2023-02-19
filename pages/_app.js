import "@/styles/globals.css";
import Footer from "@/src/components/Footer";
import HeadTitle from "@/src/components/HeadTitle";
import Nav from "@/src/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeadTitle />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
