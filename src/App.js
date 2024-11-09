import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavbar from "./Compoenets/AppNavbar";
import Products from "./Compoenets/Products";
import Cart from "./Compoenets/Cart";

function App() {
  return (
    <>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Home Page</h1>
              </>
            }
          />
          <Route path="Products" element={<Products />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
