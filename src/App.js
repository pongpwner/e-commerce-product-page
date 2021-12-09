import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header.component";
import ItemPage from "./pages/item.component";
import CartDropdown from "./components/cart/cart-dropdown.component";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cartActive, setCartActive] = useState(false);
  function toggleCart() {
    setCartActive(!cartActive);
    console.log(cartActive);
  }
  useEffect(() => {
    console.log(cartItems);
    console.log(cartItems.length);
  }, [cartItems]);
  return (
    <div className="App">
      <Header toggleCart={toggleCart} cartQuantity={cartQuantity} />
      <CartDropdown
        isActive={cartActive}
        cartItems={cartItems}
        cartQuantity={cartQuantity}
        setCartItems={setCartItems}
        setCartQuantity={setCartQuantity}
      />
      <ItemPage
        cartItems={cartItems}
        setCartItems={setCartItems}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
        quantity={quantity}
        setQuantity={setQuantity}
      />

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
