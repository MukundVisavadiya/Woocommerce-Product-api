import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { Routes, Route } from "react-router-dom";
import ProductSingle from './components/ProductSingle';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/shop" element={<Product ></Product>} />
        <Route exact path="/shop/:slug" element={<ProductSingle></ProductSingle>} />
      </Routes>
    </div>
  );
}

export default App;
