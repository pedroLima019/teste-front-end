import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import Category from "./assets/components/Category";
import Products from "./assets/components/Products";
import Partner from "./assets/components/Partner";
import Brand from "./assets/components/Brand";
import Form from "./assets/components/form";
import Footer from "./assets/components/Footer";
import "./assets/styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <Products />
      <Partner />
      <Products showCategories={false} showAllButton={true} />
      <Partner />
      <Brand />
      <Products showCategories={false} showAllButton={true} />
      <Form />
      <Footer />
    </>
  );
}

export default App;
