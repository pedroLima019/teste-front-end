import { Header } from "./assets/components/Header";
import { Banner } from "./assets/components/Banner";
import { Category } from "./assets/components/Category";
import { Products } from "./assets/components/Products";


import "./assets/styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <Products/>
    </>
  );
}

export default App;
