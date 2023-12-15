import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { Routes, Route } from "react-router-dom";
import ProductSingle from './components/ProductSingle';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Thanks from './components/Thanks'


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/shop" element={<Product per_page={6} ></Product>} />
        <Route exact path="/shop/:slug" element={<ProductSingle></ProductSingle>} />
        <Route exact path="/cart" element={<Cart></Cart>} />
        <Route exact path="/checkout" element={<Checkout></Checkout>} />
        <Route exact path='/thank-you/:order_id' element={<Thanks></Thanks>} />
      </Routes>
    </div>
  );
}

export default App;
