import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

function Page(props) {
  return (
    <div className="page-wrapper">
      <Header />
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
}

export default Page;
