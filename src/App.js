import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { Routes, Route } from "react-router-dom";
import ProductSingle from './components/ProductSingle';
import Cart from './components/Cart';



function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/shop" element={<Product per_page={6} ></Product>} />
        <Route exact path="/shop/:slug" element={<ProductSingle></ProductSingle>} />
        <Route exact path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  );
}

export default App;
