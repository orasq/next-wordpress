import "../styles/styles.scss";

//components import
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
