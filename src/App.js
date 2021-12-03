import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import ItemPage from "./pages/item.component";
import CartDropdown from "./components/cart/cart-dropdown.component";

function App() {
  const [cartActive, setCartActive] = useState(false);
  function toggleCart() {
    setCartActive(!cartActive);
    console.log(cartActive);
  }
  return (
    <div className="App">
      <Header toggleCart={toggleCart} />
      <CartDropdown isActive={cartActive} />
      <ItemPage />

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Eric Shyu</a>.
      </div>
    </div>
  );
}

export default App;
