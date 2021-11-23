import logo from "./logo.svg";
import "./App.css";
import ItemPage from "./pages/item.component";

function App() {
  return (
    <div className="App">
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
