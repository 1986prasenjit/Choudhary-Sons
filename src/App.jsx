import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  About,
  Cart,
  Collections,
  Contact,
  Home,
  Login,
  Orders,
  PlaceOrder,
  Products,
} from "./pages";

function App() {
  return (
    <div className="w-full max-w-[1480px] mx-auto p-2">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collections" element={<Collections />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
