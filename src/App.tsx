import React from "react";
import GlobalStyle from "./GlobalStyles";
import "./App.css";
import ProductList from "./components/Products/ProductList/ProducList";

function App() {
  return (
    <>
      <GlobalStyle />
      <header>
        <img src={process.env.PUBLIC_URL + "/assets/banner.jpg"} alt="header" />
        <div>
          <h2>Lorem ipsum</h2> <p>Dolor sit amet</p>
        </div>
      </header>
      <main>
        <ProductList />
      </main>
    </>
  );
}

export default App;
