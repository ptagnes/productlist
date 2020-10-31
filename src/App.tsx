import React from "react";
import GlobalStyle from "./GlobalStyles";
import "./App.css";
import ProductList from "./components/Products/ProductList/ProducList";
import Theme from "./Theme";

function App() {
  const image = process.env.PUBLIC_URL + "/assets/banner.jpg";
  return (
    <Theme>
      <GlobalStyle />
      <header>
        <img src={image} alt="header" />
        <div>
          <h2>Lorem ipsum</h2> <p>Dolor sit amet</p>
        </div>
      </header>
      <main>
        <ProductList />
      </main>
    </Theme>
  );
}
export default App;
